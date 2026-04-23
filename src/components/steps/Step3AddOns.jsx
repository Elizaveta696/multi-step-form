import checkmarkIcon from '../../assets/images/icon-checkmark.svg'
import { ADDONS } from '../../data/constants'
import { useLang } from '../../context/LangContext'

const ADDON_KEYS = ['online-service', 'larger-storage', 'custom-profile']

export default function Step3AddOns({ formData, onChange }) {
  const { t } = useLang()
  const isYearly = formData.billing === 'yearly'

  function handleToggle(key) {
    const current = formData.addons
    const updated = current.includes(key)
      ? current.filter((a) => a !== key)
      : [...current, key]
    onChange('addons', updated)
  }

  return (
    <div className="step-content">
      <h1>{t.step3.heading}</h1>
      <p>{t.step3.subheading}</p>
      <div className="addons-container">
        {ADDON_KEYS.map((key) => {
          const addon = t.step3.addons[key]
          const prices = ADDONS[key]
          const isChecked = formData.addons.includes(key)
          return (
            <label
              key={key}
              className={`addon-card${isChecked ? ' checked' : ''}`}
            >
              <input
                type="checkbox"
                className="addon-checkbox"
                checked={isChecked}
                onChange={() => handleToggle(key)}
              />
              <div className="addon-content">
                <div className="addon-header">
                  <div className="addon-name">{addon.name}</div>
                  <div className="addon-price">
                    {isYearly
                      ? `+$${prices.yearly}/yr`
                      : `+$${prices.monthly}/mo`}
                  </div>
                </div>
                <div className="addon-description">{addon.description}</div>
              </div>
              {isChecked && (
                <img src={checkmarkIcon} alt="" className="checkmark-icon" />
              )}
            </label>
          )
        })}
      </div>
    </div>
  )
}
