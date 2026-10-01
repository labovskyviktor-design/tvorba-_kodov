import { useState } from 'react';
import { CATEGORIES, CODE_ORDER } from '../config/codeRules';

/**
 * Kompaktný komponent výberu kategórie
 */
function CategorySelector({ categoryKey, category, value, onChange, allValues, stepNumber }) {
  const [isCustom, setIsCustom] = useState(false);

  const handleSelectChange = (e) => {
    const val = e.target.value;
    if (val === '__custom__') {
      setIsCustom(true);
      onChange(categoryKey, '');
    } else {
      setIsCustom(false);
      onChange(categoryKey, val);
    }
  };

  const handleCustomChange = (e) => {
    onChange(categoryKey, e.target.value.toUpperCase());
  };

  const handleInputTextChange = (e) => {
    onChange(categoryKey, e.target.value.toUpperCase());
  };

  const renderOptions = () => {
    let groupsToRender = category.groups;
    let optionsToRender = category.options;

    if (groupsToRender) {
      return groupsToRender.map((group, idx) => (
        <optgroup key={idx} label={group.name}>
          {group.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </optgroup>
      ));
    }

    if (optionsToRender) {
      return optionsToRender.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ));
    }
    return null;
  };

  const isFilled = value && value.trim() !== '';

  return (
    <div className="category-selector">
      <label className="category-label" htmlFor={`input-${categoryKey}`}>
        <span className="step-number">{stepNumber}</span>
        <span className="label-text">{category.label}</span>
        {category.required && !isFilled && <span className="required-badge">*</span>}
        {isFilled && <span className="success-badge">✓</span>}
      </label>

      {category.inputType === 'text' && !category.options?.length && !category.groups ? (
        <input
          id={`input-${categoryKey}`}
          type="text"
          className="category-input"
          value={value || ''}
          onChange={handleInputTextChange}
          placeholder="Zadajte text..."
          maxLength={category.maxLength}
        />
      ) : !isCustom ? (
        <select
          id={`select-${categoryKey}`}
          className="category-select"
          value={value || ''}
          onChange={handleSelectChange}
        >
          <option value="">— Vyberte —</option>
          {renderOptions()}
          {category.allowCustom && <option value="__custom__">✏️ Vlastná hodnota...</option>}
        </select>
      ) : (
        <div style={{ display: 'flex', gap: '5px' }}>
          <input
            id={`input-${categoryKey}`}
            type="text"
            className="category-input"
            value={value}
            onChange={handleCustomChange}
            placeholder="Vlastná hodnota..."
            maxLength={category.maxLength}
            autoFocus
          />
          <button type="button" onClick={() => { setIsCustom(false); onChange(categoryKey, ''); }} title="Späť" style={{ cursor: 'pointer', padding: '0 8px' }}>
            X
          </button>
        </div>
      )}
    </div>
  );
}

/**
 * Kompaktný formulár (Grid 3x3)
 */
export default function CodeForm({ values, onChange, onReset }) {
  return (
    <div className="code-form">
      <div className="form-header">
        <h2 className="form-title">Parametre dokumentácie</h2>
        <button type="button" className="btn-reset" onClick={onReset}>
          Resetovať
        </button>
      </div>

      <div className="form-steps">
        {CODE_ORDER.map((key, index) => {
          const category = CATEGORIES[key];
          if (!category) return null;
          return (
            <CategorySelector
              key={key}
              categoryKey={key}
              category={category}
              value={values[key] || ''}
              onChange={onChange}
              allValues={values}
              stepNumber={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
}
