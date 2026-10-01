/**
 * =============================================================================
 * GENERÁTOR NÁZVOV SÚBOROV PRE DOKUMENTÁCIU STAVIEB
 * =============================================================================
 *
 * Podľa Prílohy 24 k vyhláške č. 60/2025 Z.z.
 *
 * Formát: ID_STUPEŇ_URČENIE_KÓD_ČLENENIE_PROFESIA_ČÍSLO_NÁZOV_REVÍZIA
 * Príklad: 25AB123_PSO_01_1511_S01_ASR_001_N01_01
 */

import { SEPARATOR, CODE_ORDER, CATEGORIES, VALIDATION_RULES } from '../config/codeRules';

/**
 * Vygeneruje názov súboru na základe zvolených hodnôt.
 */
export function generateCode(values) {
  const errors = validateValues(values);

  // Zostavíme segmenty – vynecháme koncové prázdne
  const segments = [];
  let lastNonEmpty = -1;

  CODE_ORDER.forEach((key, index) => {
    const val = (values[key] || '').trim();
    if (val) lastNonEmpty = index;
  });

  for (let i = 0; i <= lastNonEmpty; i++) {
    const key = CODE_ORDER[i];
    const val = (values[key] || '').trim();
    const cat = CATEGORIES[key];
    segments.push(cat?.prefix ? `${cat.prefix}${val}` : val);
  }

  const code = segments.length > 0 ? segments.join(SEPARATOR) : '';

  return { code, segments, errors };
}

/**
 * Validuje zvolené hodnoty podľa pravidiel.
 */
export function validateValues(values) {
  const errors = [];

  // Kontrola povinných polí
  for (const [key, category] of Object.entries(CATEGORIES)) {
    if (category.required && !(values[key] || '').trim()) {
      errors.push(`Pole „${category.label}" je povinné.`);
    }
  }

  // Kontrola maximálnej dĺžky
  for (const [key, category] of Object.entries(CATEGORIES)) {
    const val = (values[key] || '').trim();
    if (val && category.maxLength && val.length > category.maxLength) {
      errors.push(`Pole „${category.label}" nesmie mať viac ako ${category.maxLength} znakov.`);
    }
  }

  // Vlastné validačné pravidlá
  for (const rule of VALIDATION_RULES) {
    if (rule.condition(values)) {
      errors.push(rule.message);
    }
  }

  return errors;
}

/**
 * Rozloží existujúci názov súboru na jednotlivé pozície.
 */
export function parseCode(code) {
  // Odstráni príponu (.pdf, .dwg atď.) ak existuje
  const withoutExtension = code.replace(/\.[^.]+$/, '');
  const parts = withoutExtension.split(SEPARATOR);
  const values = {};

  CODE_ORDER.forEach((key, index) => {
    values[key] = parts[index] || '';
  });

  return values;
}

/**
 * Vráti ľudsky čitateľný popis kódu – mapuje hodnotu na label z options.
 */
export function describeCode(values) {
  const descriptions = [];

  for (const key of CODE_ORDER) {
    const category = CATEGORIES[key];
    const val = (values[key] || '').trim();
    if (!val || !category) continue;

    // Hľadaj v options (vrátane groups)
    let option = null;
    if (category.groups) {
      for (const group of category.groups) {
        option = group.options.find((o) => o.value === val);
        if (option) break;
      }
    }
    if (!option && category.options) {
      option = category.options.find((o) => o.value === val);
    }

    const label = option ? option.label : `${val}`;
    descriptions.push({ key, label: category.label, value: val, description: label });
  }

  return descriptions;
}
