import { useState, useEffect, useRef } from 'react'
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
import Step1PersonalInfo, { validateStep1 } from './components/steps/Step1PersonalInfo'
import Step2SelectPlan from './components/steps/Step2SelectPlan'
import Step3AddOns from './components/steps/Step3AddOns'
import Step4Summary from './components/steps/Step4Summary'
import Step5ThankYou from './components/steps/Step5ThankYou'
import { useLang } from './context/LangContext'

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1"  x2="12" y2="3"  />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"  />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1"  y1="12" x2="3"  y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36" />
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
    </svg>
  )
}

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'fi', label: 'Suomi' },
  { code: 'ru', label: 'Русский' },
]

function LangSelector() {
  const { lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <div className="lang-selector" ref={ref}>
      <button
        className={`lang-btn${open ? ' open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Select language"
      >
        {lang.toUpperCase()}
      </button>
      {open && (
        <div className="lang-dropdown">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              className={`lang-option${lang === l.code ? ' active' : ''}`}
              onClick={() => { setLang(l.code); setOpen(false) }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  phone: '',
  plan: '',
  billing: 'monthly',
  addons: [],
}

export default function App() {
  const { t } = useLang()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)
  const [step1Errors, setStep1Errors] = useState({})
  const [theme, setTheme] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  function updateField(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  function handleNext() {
    if (currentStep === 1) {
      const errors = validateStep1(formData)
      if (Object.keys(errors).length > 0) {
        setStep1Errors(errors)
        return
      }
      setStep1Errors({})
    }

    if (currentStep === 2 && !formData.plan) {
      alert(t.step2.noplan)
      return
    }

    setCurrentStep((s) => Math.min(s + 1, 5))
  }

  function handleBack() {
    setCurrentStep((s) => Math.max(s - 1, 1))
  }

  function handleStepClick(step) {
    if (step < currentStep) setCurrentStep(step)
  }

  function handleChangePlan() {
    setCurrentStep(2)
  }

  return (
    <>
      <LangSelector />
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
      >
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </button>
      <div className="main-container">
        <Sidebar currentStep={currentStep} onStepClick={handleStepClick} />
        <section id="main-section">
          {currentStep === 1 && (
            <Step1PersonalInfo
              formData={formData}
              onChange={updateField}
              externalErrors={step1Errors}
            />
          )}
          {currentStep === 2 && (
            <Step2SelectPlan formData={formData} onChange={updateField} />
          )}
          {currentStep === 3 && (
            <Step3AddOns formData={formData} onChange={updateField} />
          )}
          {currentStep === 4 && (
            <Step4Summary formData={formData} onChangePlan={handleChangePlan} />
          )}
          {currentStep === 5 && <Step5ThankYou />}
          <Navigation
            currentStep={currentStep}
            onBack={handleBack}
            onNext={handleNext}
          />
        </section>
      </div>
    </>
  )
}
