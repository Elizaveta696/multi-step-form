import thankYouIcon from '../../assets/images/icon-thank-you.svg'
import { useLang } from '../../context/LangContext'

export default function Step5ThankYou() {
  const { t } = useLang()

  return (
    <div className="step-content">
      <div className="thank-you-content">
        <div className="thank-you-icon">
          <img src={thankYouIcon} alt="" />
        </div>
        <h1>{t.step5.heading}</h1>
        <p>{t.step5.body}</p>
      </div>
    </div>
  )
}
