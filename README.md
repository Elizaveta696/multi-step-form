# Multi-Step Form

A modern, responsive multi-step subscription form built with React and Vite.

## Features

- **5-Step Process**
  - Personal Information (Name, Email, Phone)
  - Plan Selection (Arcade, Advanced, Pro)
  - Add-ons Selection (Online Service, Storage, Profile Customization)
  - Order Summary & Review
  - Confirmation

- **Billing Options**
  - Monthly or Yearly billing toggle
  - Dynamic pricing updates based on billing cycle

- **Form Validation**
  - Name, email format, and phone number validation
  - Inline error messages on invalid inputs
  - Supports Unicode names (accented characters, non-Latin scripts)
  - Plan selection enforcement before proceeding

- **Dark Theme**
  - Toggle between light and dark themes via the button in the top-right corner
  - Defaults to the OS-level `prefers-color-scheme` setting
  - All colors are CSS custom properties — smooth animated transitions

- **Multilingual (i18n)**
  - Three languages: **English**, **Finnish (Suomi)**, **Russian (Русский)**
  - Language selector button next to the theme toggle
  - Every UI string translates instantly — labels, errors, step names, navigation

- **User Experience**
  - Back/Next navigation between steps
  - Click sidebar indicators to jump to any completed step
  - Data persists when navigating between steps
  - Fixed-size container — no layout shift between steps
  - Responsive design (desktop and mobile)

## Getting Started

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run unit tests (one-shot) |
| `npm run test:watch` | Run unit tests in watch mode |

## File Structure

```
multi-step-form/
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── context/
│   │   └── LangContext.jsx       # language context + useLang hook
│   ├── data/
│   │   ├── constants.js          # plans, add-ons, pricing
│   │   └── i18n.js               # EN / FI / RU translations
│   └── components/
│       ├── Sidebar.jsx
│       ├── Navigation.jsx
│       └── steps/
│           ├── Step1PersonalInfo.jsx   (+ validateStep1 export)
│           ├── Step1PersonalInfo.test.js
│           ├── Step2SelectPlan.jsx
│           ├── Step3AddOns.jsx
│           ├── Step4Summary.jsx
│           └── Step5ThankYou.jsx
└── public/
    └── assets/
```

## Testing

Unit tests cover the `validateStep1` validation function (28 tests):

- **Name** — required, whitespace-only, valid/invalid characters, emoji rejection, minimum letter count, non-ASCII support
- **Email** — required, standard/subdomain/plus-alias formats, emoji/space rejection
- **Phone** — required, international/dashes/parentheses formats, emoji/letter rejection

Run with:

```bash
npm test
```

## Technologies

- React 18
- Vite 5
- Vitest (unit testing)
- CSS3 (Flexbox, Grid, custom properties)
- Ubuntu Font (Google Fonts)

## Theming

All colors are defined as CSS custom properties on `:root` (light) and `[data-theme="dark"]` (dark), making it straightforward to add more themes.

| Token | Light | Dark |
|---|---|---|
| `--color-primary` | `hsl(213, 96%, 18%)` | `hsl(210, 80%, 88%)` |
| `--color-accent` | `hsl(243, 100%, 62%)` | `hsl(243, 100%, 72%)` |
| `--color-error` | `hsl(354, 84%, 57%)` | `hsl(354, 84%, 65%)` |
| `--color-bg` | `hsl(217, 100%, 97%)` | `hsl(230, 17%, 10%)` |
| `--color-surface` | `#ffffff` | `hsl(230, 15%, 17%)` |

## Browser Support

All modern browsers supporting ES Modules, CSS Flexbox/Grid, and `scrollbar-gutter`.
