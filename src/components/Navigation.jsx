import { useLang } from '../context/LangContext'

export default function Navigation({ currentStep, onBack, onNext }) {
  const { t } = useLang()

  if (currentStep === 5) return null

  const isLastStep = currentStep === 4

  return (
    <div className="button-group">
      {currentStep > 1 && (
        <button className="btn btn-secondary" onClick={onBack}>
          {t.nav.back}
        </button>
      )}
      <button
        className={`btn ${isLastStep ? 'btn-confirm' : 'btn-primary'}`}
        onClick={onNext}
      >
        {isLastStep ? t.nav.confirm : t.nav.next}
      </button>
    </div>
  )
}
