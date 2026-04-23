import arcadeIcon   from '../../assets/images/icon-arcade.svg'
import advancedIcon from '../../assets/images/icon-advanced.svg'
import proIcon      from '../../assets/images/icon-pro.svg'
import { PLANS } from '../../data/constants'
import { useLang } from '../../context/LangContext'

const PLAN_META = [
  { value: 'arcade',   label: 'Arcade',   icon: arcadeIcon },
  { value: 'advanced', label: 'Advanced', icon: advancedIcon },
  { value: 'pro',      label: 'Pro',      icon: proIcon },
]

export default function Step2SelectPlan({ formData, onChange }) {
  const { t } = useLang()
  const isYearly = formData.billing === 'yearly'

  function handleToggle() {
    onChange('billing', isYearly ? 'monthly' : 'yearly')
  }

  function handlePlanSelect(value) {
    onChange('plan', value)
  }

  return (
    <div className="step-content">
      <h1>{t.step2.heading}</h1>
      <p>{t.step2.subheading}</p>

      <div className="plans-container">
        {PLAN_META.map((plan) => (
          <label
            key={plan.value}
            className={`plan-card${formData.plan === plan.value ? ' checked' : ''}`}
          >
            <input
              type="radio"
              name="plan"
              value={plan.value}
              checked={formData.plan === plan.value}
              onChange={() => handlePlanSelect(plan.value)}
              style={{ position: 'absolute', opacity: 0 }}
            />
            <div className="plan-icon">
              <img src={plan.icon} alt={plan.label} />
            </div>
            <div className="plan-details">
              <div className="plan-name">{plan.label}</div>
              <div className="plan-price">
                {isYearly
                  ? `$${PLANS[plan.value].yearly}/yr`
                  : `$${PLANS[plan.value].monthly}/mo`}
              </div>
              {isYearly && <div className="plan-offer">{t.step2.monthsFree}</div>}
            </div>
          </label>
        ))}
      </div>

      <div className="plan-toggle">
        <span className={`toggle-label${!isYearly ? ' active' : ''}`}>{t.step2.monthly}</span>
        <label className="toggle-switch">
          <input type="checkbox" checked={isYearly} onChange={handleToggle} />
          <span className="slider"></span>
        </label>
        <span className={`toggle-label${isYearly ? ' active' : ''}`}>{t.step2.yearly}</span>
      </div>
    </div>
  )
}
