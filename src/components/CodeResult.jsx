import { useState } from 'react';

/**
 * Kompaktné zobrazenie vygenerovaného kódu v jednom riadku
 */
export default function CodeResult({ code, errors }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement('textarea');
      el.value = code;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const isFullyValid = errors.length === 0;

  return (
    <div className={`result-container ${isFullyValid ? 'is-valid' : 'has-errors'}`}>
      
      {!isFullyValid && (
        <div className="error-alert">
          Vyplňte všetky povinné polia pre získanie kompletného názvu.
        </div>
      )}

      <div className="result-main">
        <div className="code-display-huge">
          {code ? (
            <code className="code-value-huge">{code}</code>
          ) : (
            <span style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>Tu sa zobrazí názov súboru...</span>
          )}
        </div>
        
        <button
          type="button"
          className={`btn-copy-huge ${copied ? 'btn-copy-huge--copied' : ''}`}
          onClick={handleCopy}
          disabled={!code}
        >
          {copied ? '✅ Skopírované' : 'Kopírovať názov'}
        </button>
      </div>

    </div>
  );
}
