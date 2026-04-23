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
  - Plan selection enforcement before proceeding

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

## File Structure

```
multi-step-form/
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   └── components/
│       ├── Sidebar.jsx
│       ├── Navigation.jsx
│       └── steps/
│           ├── Step1PersonalInfo.jsx
│           ├── Step2SelectPlan.jsx
│           ├── Step3AddOns.jsx
│           ├── Step4Summary.jsx
│           └── Step5ThankYou.jsx
└── public/
    └── assets/
```

## Technologies

- React 18
- Vite 5
- CSS3 (Flexbox, Grid, custom properties)
- Ubuntu Font (Google Fonts)

## Colors

| Name | Value |
|------|-------|
| Marine Blue | `hsl(213, 96%, 18%)` |
| Purplish Blue | `hsl(243, 100%, 62%)` |
| Pastel Blue | `hsl(228, 100%, 84%)` |
| Strawberry Red | `hsl(354, 84%, 57%)` |
| Cool Gray | `hsl(231, 11%, 63%)` |

## Browser Support

All modern browsers supporting ES Modules, CSS Flexbox/Grid, and `scrollbar-gutter`.
