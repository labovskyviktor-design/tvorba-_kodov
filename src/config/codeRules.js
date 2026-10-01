/**
 * =============================================================================
 * KONFIGURÁCIA PRAVIDIEL TVORBY NÁZVOV SÚBOROV PRE DOKUMENTÁCIU STAVIEB
 * =============================================================================
 *
 * Podľa Prílohy 24 k vyhláške č. 60/2025 Z.z. – Tvorba názvu súborov
 * pre dokumentáciu stavieb v elektronickej podobe
 *
 * Vyhlášky č. 59/2025 Z.z. – Členenie stavieb (identifikačné kódy)
 *
 * ŠTRUKTÚRA NÁZVU SÚBORU (9 pozícií oddelených „_"):
 * Pozícia 1: ID stavby (pridelené informačným systémom)
 * Pozícia 2: Stupeň dokumentácie stavby (3 znaky)
 * Pozícia 3: Určenie stavby alebo súboru stavieb (2 znaky)
 * Pozícia 4: Identifikačný kód stavby (4 znaky – vyhláška 59/2025)
 * Pozícia 5: Členenie dokumentácie / stavebné objekty / prevádzkové súbory (3 znaky)
 * Pozícia 6: Podrobné členenie – profesia (3 znaky)
 * Pozícia 7: Číslo dokumentu/výkresu (3 znaky)
 * Pozícia 8: Názov dokumentu/výkresu (3 znaky)
 * Pozícia 9: Revízia (2 znaky, voliteľná)
 *
 * PRÍKLAD: 25AB123_PSO_01_1511_S01_ASR_001_N01_01.pdf
 */

// ─── Oddeľovač segmentov ────────────────────────────────────────────────────
export const SEPARATOR = '_';

// ─── Poradie pozícií vo výslednom kóde ───────────────────────────────────────
export const CODE_ORDER = [
  'idStavby',
  'stupenDokumentacie',
  'urcenieSavby',
  'identifikacnyKod',
  'clenenieDokumentacie',
  'profesia',
  'cisloVykresu',
  'nazovDokumentu',
  'revizia',
];

// ─── Pozícia 1: ID Stavby ────────────────────────────────────────────────────
// Voľný vstup – pridelené informačným systémom (napr. 25AB123)

// ─── Pozícia 2: Stupeň dokumentácie ─────────────────────────────────────────
// ─── Pozícia 3: Určenie stavby ───────────────────────────────────────────────
// ─── Pozícia 4: Identifikačný kód (vyhláška 59/2025) ────────────────────────
// ─── Pozícia 5: Členenie dokumentácie ────────────────────────────────────────
// ─── Pozícia 6: Profesia ─────────────────────────────────────────────────────
// ─── Pozícia 7: Číslo výkresu/dokumentu ──────────────────────────────────────
// ─── Pozícia 8: Názov dokumentu/výkresu ──────────────────────────────────────
// ─── Pozícia 9: Revízia ──────────────────────────────────────────────────────

export const CATEGORIES = {
  idStavby: {
    label: 'Pozícia 1 – ID stavby',
    description: 'ID stavby pridelené informačným systémom (napr. 25AB123)',
    required: true,
    allowCustom: true,
    prefix: '',
    maxLength: 10,
    inputType: 'text',
    placeholder: 'napr. 25AB123',
    options: [],
  },

  stupenDokumentacie: {
    label: 'Pozícia 2 – Stupeň dokumentácie',
    description: 'Stupeň projektovej dokumentácie stavby',
    required: true,
    allowCustom: false,
    prefix: '',
    maxLength: 3,
    options: [
      { value: 'PSO', label: 'PSO – Projekt stavby na ohlásenie' },
      { value: 'SZP', label: 'SZP – Stavebný zámer' },
      { value: 'SZZ', label: 'SZZ – Zmena stavebného zámeru' },
      { value: 'PSP', label: 'PSP – Projekt stavby' },
      { value: 'PSZ', label: 'PSZ – Zmena projektu stavby' },
      { value: 'VPP', label: 'VPP – Vykonávací projekt' },
      { value: 'RDS', label: 'RDS – Realizačná dokumentácia stavby' },
      { value: 'DSZ', label: 'DSZ – Dokumentácia skutočného zhotovenia' },
      { value: 'ZDS', label: 'ZDS – Zjednodušená dokumentácia stavby (Pasport)' },
    ],
  },

  urcenieSavby: {
    label: 'Pozícia 3 – Určenie stavby',
    description: 'Číslo stavby v rámci súboru stavieb (01 = samostatná stavba)',
    required: true,
    allowCustom: true,
    prefix: '',
    maxLength: 2,
    placeholder: 'napr. 01',
    options: [
      { value: '01', label: '01 – Samostatná stavba / Stavba č. 1 (hlavná)' },
      { value: '02', label: '02 – Stavba č. 2 pri súbore stavieb' },
      { value: '03', label: '03 – Stavba č. 3 pri súbore stavieb' },
      { value: '04', label: '04 – Stavba č. 4 pri súbore stavieb' },
      { value: '05', label: '05 – Stavba č. 5 pri súbore stavieb' },
    ],
  },

  identifikacnyKod: {
    label: 'Pozícia 4 – Identifikačný kód stavby',
    description: 'Podľa vyhlášky č. 59/2025 Z.z. o členení stavieb (4 číslice)',
    required: true,
    allowCustom: true,
    prefix: '',
    maxLength: 4,
    placeholder: 'napr. 1111',
    searchable: true,
    groups: [
      {
        name: '1 – BUDOVY',
        options: [
          // 11 – Bytové budovy
          { value: '1111', label: '1111 – Jednobytové budovy' },
          { value: '1112', label: '1112 – Dvojbytové budovy' },
          { value: '1113', label: '1113 – Trojbytové budovy' },
          { value: '1120', label: '1120 – Viacbytové budovy' },
          { value: '1130', label: '1130 – Iné bytové budovy' },
          // 12 – Nebytové budovy pre vybavenosť
          { value: '1211', label: '1211 – Hotelové budovy' },
          { value: '1212', label: '1212 – Iné budovy pre cestovný ruch a ubytovanie' },
          { value: '1213', label: '1213 – Budovy verejného stravovania' },
          { value: '1220', label: '1220 – Budovy pre administratívu' },
          { value: '1230', label: '1230 – Budovy pre obchod a služby' },
          { value: '1241', label: '1241 – Budovy pre kultúru' },
          { value: '1242', label: '1242 – Budovy pre cirkev' },
          { value: '1250', label: '1250 – Budovy pre výchovu a vzdelávanie' },
          { value: '1260', label: '1260 – Budovy pre zdravotníctvo' },
          { value: '1271', label: '1271 – Budovy pre šport' },
          { value: '1272', label: '1272 – Budovy pre rekreáciu' },
          { value: '1280', label: '1280 – Budovy pre sociálne služby' },
          { value: '1290', label: '1290 – Iné budovy pre vybavenosť' },
          // 13 – Nebytové budovy pre výrobu
          { value: '1311', label: '1311 – Budovy potravinárskej výroby' },
          { value: '1312', label: '1312 – Budovy spracovateľského priemyslu' },
          { value: '1313', label: '1313 – Iné priemyselné budovy' },
          { value: '1314', label: '1314 – Sklady' },
          { value: '1321', label: '1321 – Poľnohospodárske budovy pre rastlinnú výrobu' },
          { value: '1322', label: '1322 – Poľnohospodárske budovy pre živočíšnu výrobu' },
          { value: '1323', label: '1323 – Budovy pre lesníctvo a poľovníctvo' },
          { value: '1330', label: '1330 – Budovy pre inú výrobu' },
          // 14 – Nebytové budovy pre dopravu
          { value: '1411', label: '1411 – Budovy pre cestnú dopravu' },
          { value: '1412', label: '1412 – Budovy pre železničnú dopravu' },
          { value: '1413', label: '1413 – Budovy pre leteckú dopravu' },
          { value: '1420', label: '1420 – Garáže' },
          // 15 – Budovy pre energetiku
          { value: '1511', label: '1511 – Budovy pre energetiku' },
          { value: '1512', label: '1512 – Budovy pre vodné hospodárstvo' },
        ],
      },
      {
        name: '2 – INŽINIERSKE STAVBY',
        options: [
          // 21 – Dopravné stavby
          { value: '2111', label: '2111 – Diaľnice' },
          { value: '2112', label: '2112 – Cesty I. a II. triedy' },
          { value: '2113', label: '2113 – Cesty III. triedy, miestne komunikácie' },
          { value: '2114', label: '2114 – Odstavné a parkovacie plochy' },
          { value: '2121', label: '2121 – Celoštátne železničné dráhy' },
          { value: '2122', label: '2122 – Regionálne železničné dráhy' },
          { value: '2123', label: '2123 – Mestské dráhy a lanovky' },
          { value: '2130', label: '2130 – Letiskové dráhy a plochy' },
          { value: '2141', label: '2141 – Mosty' },
          { value: '2142', label: '2142 – Tunely' },
          // 22 – Vodné stavby
          { value: '2211', label: '2211 – Prístavy, vodné cesty' },
          { value: '2212', label: '2212 – Vodné nádrže, priehrady' },
          { value: '2213', label: '2213 – Hydromeliorácie' },
          { value: '2214', label: '2214 – Stavby pre zásobovanie vodou' },
          { value: '2215', label: '2215 – Stavby pre odpadové vody' },
          { value: '2216', label: '2216 – Historické vodohospodárske diela, fontány' },
          // 23 – Technické vybavenie územia
          { value: '2311', label: '2311 – Rozvody ropy a plynu' },
          { value: '2312', label: '2312 – Rozvody vody' },
          { value: '2313', label: '2313 – Kanalizačné a stokové siete' },
          { value: '2314', label: '2314 – Elektronické komunikačné siete' },
          { value: '2315', label: '2315 – Prenosové a distribučné sústavy el. energie' },
          { value: '2321', label: '2321 – Prípojky plynu' },
          { value: '2322', label: '2322 – Prípojky vody' },
          { value: '2323', label: '2323 – Prípojky elektronických komunikačných sietí' },
          { value: '2324', label: '2324 – Prípojky elektrické' },
          { value: '2325', label: '2325 – Prípojky kanalizácie' },
          { value: '2331', label: '2331 – Stavby energetických zdrojov' },
          { value: '2332', label: '2332 – Iné stavby technického vybavenia územia' },
          // 24 – Priemyselná výroba
          { value: '2411', label: '2411 – Banské stavby a ťažobné zariadenia' },
          { value: '2412', label: '2412 – Stavby chemických zariadení' },
          { value: '2413', label: '2413 – Stavby ťažkého priemyslu' },
          { value: '2420', label: '2420 – Nádrže a silá, priemyselné komíny a veže' },
          // 25 – Stavby vybavenosti
          { value: '2511', label: '2511 – Športové ihriská' },
          { value: '2512', label: '2512 – Iné športové a rekreačné stavby' },
          { value: '2520', label: '2520 – Stavby pre kultúru' },
          { value: '2530', label: '2530 – Iné stavby pre vybavenosť' },
          // 26 – Informačné konštrukcie
          { value: '2611', label: '2611 – Drobné informačné konštrukcie' },
          { value: '2612', label: '2612 – Jednoduché informačné konštrukcie' },
          // 27 – Iné inžinierske stavby
          { value: '2711', label: '2711 – Drobné inžinierske stavby nadzemné' },
          { value: '2712', label: '2712 – Drobné inžinierske stavby podzemné' },
          { value: '2713', label: '2713 – Drobné inžinierske stavby energetické' },
          { value: '2720', label: '2720 – Výškové konštrukcie' },
          // 28 – Stavebné úpravy pozemku
          { value: '2811', label: '2811 – Terénne úpravy' },
          { value: '2812', label: '2812 – Vonkajšie úpravy' },
        ],
      },
    ],
    // Flat options pre kompatibilitu
    get options() {
      return this.groups.flatMap(g => g.options);
    },
  },

  clenenieDokumentacie: {
    label: 'Pozícia 5 – Členenie dokumentácie',
    description: 'Základné členenie dokumentácie a stavebné objekty/prevádzkové súbory',
    required: true,
    allowCustom: true,
    prefix: '',
    maxLength: 3,
    placeholder: 'napr. S01',
    groups: [
      {
        name: 'Základné členenie',
        options: [
          { value: 'A00', label: 'A00 – Zoznam dokumentácie' },
          { value: 'B00', label: 'B00 – Súhrnná správa' },
          { value: 'C00', label: 'C00 – Situačné výkresy stavby' },
          { value: 'E00', label: 'E00 – Prílohy' },
        ],
      },
      {
        name: 'D. Stavebné objekty (S01, S02...)',
        options: [
          { value: 'S01', label: 'S01 – Stavebný objekt č. 1' },
          { value: 'S02', label: 'S02 – Stavebný objekt č. 2' },
          { value: 'S03', label: 'S03 – Stavebný objekt č. 3' },
          { value: 'S04', label: 'S04 – Stavebný objekt č. 4' },
          { value: 'S05', label: 'S05 – Stavebný objekt č. 5' },
        ],
      },
      {
        name: 'D. Prevádzkové súbory (P01, P02...)',
        options: [
          { value: 'P01', label: 'P01 – Prevádzkový súbor č. 1' },
          { value: 'P02', label: 'P02 – Prevádzkový súbor č. 2' },
          { value: 'P03', label: 'P03 – Prevádzkový súbor č. 3' },
        ],
      },
    ],
    get options() {
      return this.groups.flatMap(g => g.options);
    },
  },

  profesia: {
    label: 'Pozícia 6 – Profesia / Podrobné členenie',
    description: 'Závisí od zvoleného členenia (Pozícia 5)',
    required: false,
    allowCustom: true,
    prefix: '',
    maxLength: 3,
    placeholder: 'napr. ASR',
    groups: [
      {
        name: 'Profesia základné (pre S01–S99)',
        parentValues: ['S'],
        options: [
          { value: 'ASR', label: 'ASR – Architektonicko-stavebné riešenie' },
          { value: 'STA', label: 'STA – Statika' },
          { value: 'ZTI', label: 'ZTI – Zdravotechnická inštalácia' },
          { value: 'VYK', label: 'VYK – Vykurovanie' },
          { value: 'PLY', label: 'PLY – Plynoinštalácia' },
          { value: 'VZT', label: 'VZT – Vzduchotechnika a chladenie' },
          { value: 'MAR', label: 'MAR – Meranie a regulácia' },
          { value: 'ELI', label: 'ELI – Elektroinštalácia' },
          { value: 'BLZ', label: 'BLZ – Bleskozvod a uzemnenie' },
          { value: 'SLP', label: 'SLP – Slaboproúdová inštalácia, ŠKR' },
          { value: 'HSP', label: 'HSP – Hlasová signalizácia požiaru' },
          { value: 'EPS', label: 'EPS – Elektrická požiarna signalizácia' },
          { value: 'SHZ', label: 'SHZ – Stabilné hasiace zariadenia' },
          { value: 'ODT', label: 'ODT – Zariadenie na odvod dymu a tepla' },
          { value: 'USV', label: 'USV – Umelé osvetlenie' },
          { value: 'KRA', label: 'KRA – Krajinné, sadové a terénne úpravy' },
          { value: 'DOP', label: 'DOP – Dopravné riešenie' },
          { value: 'POD', label: 'POD – Projekt organizácie dopravy' },
          { value: 'TDZ', label: 'TDZ – Trvalé dopravné značenie' },
          { value: 'DDZ', label: 'DDZ – Dočasné dopravné značenie' },
        ],
      },
      {
        name: 'Profesia areálové',
        parentValues: ['S'],
        options: [
          { value: 'PNN', label: 'PNN – Elektrická prípojka nízkeho napätia' },
          { value: 'PVN', label: 'PVN – Elektrická prípojka vysokého napätia' },
          { value: 'VUO', label: 'VUO – Vonkajšie / verejné osvetlenie' },
          { value: 'ARS', label: 'ARS – Areálové / miestne rozvody silnoprúdu' },
          { value: 'AEK', label: 'AEK – Areálové rozvody elektronických komunikácií' },
          { value: 'REK', label: 'REK – Rozvody elektronických komunikácií' },
          { value: 'VDS', label: 'VDS – Vedenia distribučnej sústavy' },
        ],
      },
      {
        name: 'Profesia špecializované',
        parentValues: ['S'],
        options: [
          { value: 'BK', label: 'BK – Betónové konštrukcie' },
          { value: 'OK', label: 'OK – Oceľové konštrukcie' },
          { value: 'SKV', label: 'SKV – Systém kontroly vstupu' },
          { value: 'EZS', label: 'EZS – Elektrická zabezpečovacia signalizácia' },
          { value: 'UTO', label: 'UTO – Uzatvorený televízny okruh (CCIR)' },
          { value: 'HSR', label: 'HSR – Hotelový systém riadenia' },
          { value: 'NKS', label: 'NKS – Nemocničný komunikačný systém' },
          { value: 'SKR', label: 'SKR – Systém riadenia procesov' },
          { value: 'CRS', label: 'CRS – Centrálne riadiace systémy budov (BMS)' },
          { value: 'ADR', label: 'ADR – Automatický systém dispečerského riadenia' },
          { value: 'ZDT', label: 'ZDT – Zdravotnícka technológia' },
          { value: 'RTG', label: 'RTG – Projekt radiačnej ochrany' },
          { value: 'MED', label: 'MED – Medicinálne plyny' },
          { value: 'TGZ', label: 'TGZ – Výrobné technologické zariadenia' },
          { value: 'ETS', label: 'ETS – Elektrická stanica' },
          { value: 'PRS', label: 'PRS – Prevádzkový rozvod silnoprúdu' },
          { value: 'NZE', label: 'NZE – Náhradný zdroj (el. energie)' },
          { value: 'FVZ', label: 'FVZ – Fotovoltický zdroj (do 10 kW)' },
          { value: 'FVE', label: 'FVE – Fotovoltická elektráreň (nad 10 kW)' },
          { value: 'KGZ', label: 'KGZ – Kogeneračný zdroj / KVET' },
          { value: 'BAT', label: 'BAT – Batériové úložisko' },
          { value: 'KTO', label: 'KTO – Katódová ochrana' },
          { value: 'INE', label: 'INE – Iná profesia vyššie neuvedená' },
        ],
      },
    ],
    get options() {
      return this.groups.flatMap(g => g.options);
    },
  },

  cisloVykresu: {
    label: 'Pozícia 7 – Číslo dokumentu / výkresu',
    description: 'Poradové číslo výkresu alebo dokumentu (3 číslice)',
    required: false,
    allowCustom: true,
    prefix: '',
    maxLength: 3,
    placeholder: 'napr. 001',
    inputType: 'text',
    options: [
      { value: '000', label: '000 – Zoznam výkresov / súhrnná správa / technická správa' },
      { value: '001', label: '001 – Výkres / dokument č. 1' },
      { value: '002', label: '002 – Výkres / dokument č. 2' },
      { value: '003', label: '003 – Výkres / dokument č. 3' },
      { value: '004', label: '004 – Výkres / dokument č. 4' },
      { value: '005', label: '005 – Výkres / dokument č. 5' },
      { value: '006', label: '006 – Výkres / dokument č. 6' },
    ],
  },

  nazovDokumentu: {
    label: 'Pozícia 8 – Názov dokumentu / výkresu',
    description: 'Skratka typu dokumentu alebo výkresu (3 znaky)',
    required: false,
    allowCustom: true,
    prefix: '',
    maxLength: 3,
    placeholder: 'napr. N01',
    options: [
      { value: 'AAA', label: 'AAA – Zoznam dokumentov a výkresov' },
      { value: 'TXT', label: 'TXT – Technická správa' },
      { value: 'SIT', label: 'SIT – Situácia' },
      { value: 'VYT', label: 'VYT – Vytýčovací výkres' },
      { value: 'VYZ', label: 'VYZ – Výkres základov' },
      { value: 'VYS', label: 'VYS – Výkres strechy' },
      { value: 'STV', label: 'STV – Kontrolovateľný statický výpočet' },
      { value: 'N01', label: 'N01 – Pôdorys 1. nadzemného podlažia / pôdorys č. 1' },
      { value: 'N02', label: 'N02 – Pôdorys 2. nadzemného podlažia / pôdorys č. 2' },
      { value: 'N03', label: 'N03 – Pôdorys 3. nadzemného podlažia / pôdorys č. 3' },
      { value: 'P01', label: 'P01 – Pôdorys 1. podzemného podlažia' },
      { value: 'P02', label: 'P02 – Pôdorys 2. podzemného podlažia' },
      { value: 'POH', label: 'POH – Pohľad' },
      { value: 'REZ', label: 'REZ – Rez' },
      { value: 'VIZ', label: 'VIZ – Vizualizácia' },
      { value: 'DET', label: 'DET – Detail' },
      { value: 'SCH', label: 'SCH – Schéma' },
      { value: 'VVZ', label: 'VVZ – Výkaz výrobkov a zariadení' },
      { value: 'VYV', label: 'VYV – Výkaz výmer' },
      { value: 'ROZ', label: 'ROZ – Rozpočet' },
    ],
  },

  revizia: {
    label: 'Pozícia 9 – Revízia',
    description: 'Číslo revízie (nepovinné, 00 = prvé vydanie)',
    required: false,
    allowCustom: true,
    prefix: '',
    maxLength: 2,
    placeholder: 'napr. 01',
    options: [
      { value: '', label: '(žiadna) – Prvé vydanie' },
      { value: '01', label: '01 – Revízia č. 1' },
      { value: '02', label: '02 – Revízia č. 2' },
      { value: '03', label: '03 – Revízia č. 3' },
    ],
  },
};

// ─── Validačné pravidlá ──────────────────────────────────────────────────────
export const VALIDATION_RULES = [
  {
    condition: (values) => {
      const clen = values.clenenieDokumentacie || '';
      const prof = values.profesia || '';
      // Ak je členenie A00, B00, C00 – profesia musí byť príslušná
      if (clen === 'A00' && prof && prof !== 'AAA') return true;
      return false;
    },
    message: 'Pri členení A00 je profesia pevne daná ako AAA (Zoznam dokumentácie).',
  },
  {
    condition: (values) => {
      const clen = values.clenenieDokumentacie || '';
      const prof = values.profesia || '';
      if (clen === 'B00' && prof && prof !== 'SPR') return true;
      return false;
    },
    message: 'Pri členení B00 je profesia pevne daná ako SPR (Súhrnná správa).',
  },
  {
    condition: (values) => {
      const clen = values.clenenieDokumentacie || '';
      const prof = values.profesia || '';
      if (clen === 'C00' && prof && prof !== 'SIT') return true;
      return false;
    },
    message: 'Pri členení C00 je profesia pevne daná ako SIT (Situácia).',
  },
];




