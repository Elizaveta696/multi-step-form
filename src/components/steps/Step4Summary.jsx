import { PLANS, ADDONS } from '../../data/constants'
import { useLang } from '../../context/LangContext'

export default function Step4Summary({ formData, onChangePlan }) {
  const { t } = useLang()
  const isYearly = formData.billing === 'yearly'
  const suffix = isYearly ? 'yr' : 'mo'
  const billingLabel = isYearly ? t.step4.yearly : t.step4.monthly

  const planPrice = formData.plan ? PLANS[formData.plan][formData.billing] : 0
  const addonTotal = formData.addons.reduce(
    (sum, key) => sum + ADDONS[key][formData.billing],
    0
  )
  const total = planPrice + addonTotal

  const planName = formData.plan
    ? formData.plan.charAt(0).toUpperCase() + formData.plan.slice(1)
    : ''

  return (
    <div className="step-content">
      <h1>{t.step4.heading}</h1>
      <p>{t.step4.subheading}</p>
      <div className="summary-container">
        <div className="summary-section">
          <div className="summary-item">
            <div>
              <div className="summary-label">
                {planName} ({billingLabel})
              </div>
              <button className="summary-change-link" onClick={onChangePlan}>
                {t.step4.change}
              </button>
            </div>
            <div className="summary-price">
              ${planPrice}/{suffix}
            </div>
          </div>
          <div className="summary-divider"></div>
          {formData.addons.map((key) => (
            <div key={key} className="summary-addon-item">
              <span>{t.step3.addons[key].name}</span>
              <span>+${ADDONS[key][formData.billing]}/{suffix}</span>
            </div>
          ))}
        </div>
        <div className="summary-total">
          <div className="total-label">
            {isYearly ? t.step4.totalYear : t.step4.totalMonth}
          </div>
          <div className="total-price">+${total}/{suffix}</div>
        </div>
      </div>
    </div>
  )
}
