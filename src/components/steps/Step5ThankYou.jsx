import thankYouIcon from '../../assets/images/icon-thank-you.svg'

export default function Step5ThankYou() {
  return (
    <div className="step-content">
      <div className="thank-you-content">
        <div className="thank-you-icon">
          <img src={thankYouIcon} alt="Thank you" />
        </div>
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@tunigaming.com.
        </p>
      </div>
    </div>
  )
}
