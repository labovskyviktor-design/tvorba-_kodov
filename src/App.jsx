import { useState, useCallback, useMemo } from 'react';
import CodeForm from './components/CodeForm';
import CodeResult from './components/CodeResult';
import { generateCode } from './utils/codeGenerator';
import { CODE_ORDER } from './config/codeRules';
import './App.css';

function App() {
  const emptyValues = useMemo(() => {
    const obj = {};
    CODE_ORDER.forEach((key) => (obj[key] = ''));
    return obj;
  }, []);

  const [values, setValues] = useState(emptyValues);

  const handleChange = useCallback((key, value) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleReset = useCallback(() => {
    setValues(emptyValues);
  }, [emptyValues]);

  const result = useMemo(() => generateCode(values), [values]);

  return (
    <div className="app">
      <header className="app-header">
        <span className="brand-title">Kódovač stavieb</span>
        <span className="brand-subtitle">Vyhláška 60/2025</span>
      </header>

      <main className="app-main">
        <section className="panel--form">
          <CodeForm
            values={values}
            onChange={handleChange}
            onReset={handleReset}
          />
        </section>

        <section className="panel--result">
          <CodeResult
            code={result.code}
            errors={result.errors}
          />
        </section>
      </main>

      <footer className="app-footer">
        Vygenerované automaticky.
      </footer>
    </div>
  );
}

export default App;
