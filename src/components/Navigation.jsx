export default function Navigation({ currentStep, onBack, onNext }) {
  if (currentStep === 5) return null

  const isLastStep = currentStep === 4

  return (
    <div className="button-group">
      {currentStep > 1 && (
        <button className="btn btn-secondary" onClick={onBack}>
          Go Back
        </button>
      )}
      <button
        className={`btn ${isLastStep ? 'btn-confirm' : 'btn-primary'}`}
        onClick={onNext}
      >
        {isLastStep ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  )
}
