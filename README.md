# 🏗️ Kódovač Stavieb

Webová aplikácia na generovanie kódov podľa názvoslovia stavieb. Umožňuje používateľovi vybrať parametre stavby (typ objektu, etapa, podlažie, profesia, číslo výkresu) a na základe nakonfigurovaných pravidiel vygeneruje výsledný kód.

## 📁 Štruktúra projektu

```
moj-kodovac-projekt/
├── docs_materials/              # PDF dokumenty s pravidlami (nesú sa nenasadzujú)
│   └── README.md
├── src/
│   ├── components/
│   │   ├── CodeForm.jsx         # Formulár s parametrami stavby
│   │   ├── CodeResult.jsx       # Zobrazenie výsledného kódu
│   │   └── TemplatePanel.jsx    # Rýchle šablóny
│   ├── config/
│   │   └── codeRules.js         # ⭐ Konfigurácia pravidiel (tu sa mení logika)
│   ├── utils/
│   │   └── codeGenerator.js     # Generátor kódov (utility funkcie)
│   ├── App.jsx                  # Hlavný komponent
│   ├── App.css                  # Štýly aplikácie
│   ├── index.css                # Globálne štýly
│   └── main.jsx                 # Entry point
├── index.html                   # HTML šablóna
├── vercel.json                  # Konfigurácia pre Vercel
├── vite.config.js               # Konfigurácia Vite
├── package.json                 # Závislosti
└── README.md                    # Tento súbor
```

## 🚀 Lokálne spustenie (krok za krokom)

### 1. Predpoklady

- [Node.js](https://nodejs.org/) (verzia 18+)
- [Git](https://git-scm.com/)
- Textový editor (napr. VS Code)

### 2. Inštalácia závislostí

```bash
cd moj-kodovac-projekt
npm install
```

### 3. Spustenie vývojového servera

```bash
npm run dev
```

Aplikácia sa spustí na `http://localhost:5173` (alebo inom porte).

### 4. Produkčný build (voliteľné)

```bash
npm run build
npm run preview   # Náhľad produkčného buildu
```

---

## 🔗 Prepojenie s GitHubom (krok za krokom)

### 1. Vytvorte nový repozitár na GitHub

1. Choďte na [github.com/new](https://github.com/new)
2. Zadajte názov repozitára, napr. `moj-kodovac-projekt`
3. Nechajte **Public** alebo vyberte **Private**
4. **Neklikajte** na "Initialize with README" (už máme vlastný)
5. Kliknite **Create repository**

### 2. Inicializujte Git a pushujte

```bash
cd moj-kodovac-projekt

# Inicializácia gitu
git init
git add .
git commit -m "Prvotný commit: kostra Kódovača Stavieb"

# Prepojenie s GitHub repozitárom (nahraďte VÁŠ-USERNAME)
git remote add origin https://github.com/VÁŠ-USERNAME/moj-kodovac-projekt.git
git branch -M main
git push -u origin main
```

---

## ☁️ Nasadenie na Vercel (ZADARMO)

### Možnosť A: Cez Vercel Dashboard (odporúčané)

1. Choďte na [vercel.com](https://vercel.com/) a prihláste sa cez GitHub
2. Kliknite **"Add New..." → "Project"**
3. Importujte repozitár `moj-kodovac-projekt`
4. Vercel automaticky rozpozná Vite framework
5. Kliknite **"Deploy"** — hotovo! 🎉

Každý nový `git push` na `main` branch automaticky spustí nový deploy.

### Možnosť B: Cez Vercel CLI

```bash
# Inštalácia Vercel CLI
npm install -g vercel

# Prihlásenie
vercel login

# Nasadenie (z koreňového adresára projektu)
cd moj-kodovac-projekt
vercel

# Produkčný deploy
vercel --prod
```

---

## ⚙️ Úprava pravidiel tvorby kódov

Všetky pravidlá sa konfigurujú v jednom súbore:

📂 **`src/config/codeRules.js`**

Čo môžete upraviť:

| Nastavenie         | Popis                                                  |
|--------------------|--------------------------------------------------------|
| `SEPARATOR`        | Oddeľovač medzi segmentmi kódu (predvolené: `-`)      |
| `CODE_ORDER`       | Poradie segmentov vo výslednom kóde                    |
| `CATEGORIES`       | Kategórie s ich možnosťami (dropdown hodnoty)          |
| `VALIDATION_RULES` | Validačné pravidlá pre kombinácie                      |
| `TEMPLATES`        | Preddefinované rýchle šablóny                          |

### Príklad pridania novej kategórie

```javascript
// V CATEGORIES objekte pridajte:
novySegment: {
  label: 'Nový Segment',
  description: 'Popis nového segmentu',
  required: false,
  allowCustom: true,
  prefix: '',
  maxLength: 4,
  options: [
    { value: 'A', label: 'A – Popis A' },
    { value: 'B', label: 'B – Popis B' },
  ],
},

// V CODE_ORDER pridajte na správnu pozíciu:
export const CODE_ORDER = [
  'typObjektu',
  'etapa',
  'podlazie',
  'profesia',
  'cisloVykresu',
  'novySegment',   // <-- nový segment
];
```

---

## 📋 Ďalšie kroky

1. Nahrajte PDF dokumenty do `docs_materials/`
2. Na základe pravidiel z PDF upravíme `src/config/codeRules.js`
3. Otestujeme a nasadíme na Vercel

---

## 📄 Licencia

Interný projekt – všetky práva vyhradené.
