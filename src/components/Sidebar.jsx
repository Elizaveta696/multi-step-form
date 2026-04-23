import bgDesktop from '../assets/images/bg-sidebar-desktop.svg'
import bgMobile from '../assets/images/bg-sidebar-mobile.svg'
import { useLang } from '../context/LangContext'

export default function Sidebar({ currentStep, onStepClick }) {
  const { t } = useLang()

  return (
    <section
      id="side-section"
      style={{ backgroundImage: `url(${bgDesktop})` }}
    >
      <style>{`
        @media (max-width: 768px) {
          #side-section {
            background-image: url(${bgMobile}) !important;
          }
        }
      `}</style>
      {t.steps.map((step, i) => {
        const num = i + 1
        return (
          <div key={num} className="step-indicator">
            <div
              className={`step-number${currentStep === num ? ' active' : ''}`}
              onClick={() => onStepClick(num)}
            >
              {num}
            </div>
            <div className="step-label">{step.label}</div>
            <div className="step-title">{step.title}</div>
          </div>
        )
      })}
    </section>
  )
}
