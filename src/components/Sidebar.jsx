import bgDesktop from '../assets/images/bg-sidebar-desktop.svg'
import bgMobile from '../assets/images/bg-sidebar-mobile.svg'
import { STEPS } from '../data/constants'

export default function Sidebar({ currentStep, onStepClick }) {
  return (
    <section
      id="side-section"
      style={{
        backgroundImage: `url(${bgDesktop})`,
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          #side-section {
            background-image: url(${bgMobile}) !important;
          }
        }
      `}</style>
      {STEPS.map((step) => (
        <div key={step.number} className="step-indicator">
          <div
            className={`step-number${currentStep === step.number ? ' active' : ''}`}
            onClick={() => onStepClick(step.number)}
          >
            {step.number}
          </div>
          <div className="step-label">{step.label}</div>
          <div className="step-title">{step.title}</div>
        </div>
      ))}
    </section>
  )
}
