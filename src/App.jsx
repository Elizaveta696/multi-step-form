import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
import Step1PersonalInfo, { validateStep1 } from './components/steps/Step1PersonalInfo'
import Step2SelectPlan from './components/steps/Step2SelectPlan'
import Step3AddOns from './components/steps/Step3AddOns'
import Step4Summary from './components/steps/Step4Summary'
import Step5ThankYou from './components/steps/Step5ThankYou'

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  phone: '',
  plan: '',
  billing: 'monthly',
  addons: [],
}

export default function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)
  const [step1Errors, setStep1Errors] = useState({})

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
      alert('Please select a plan')
      return
    }

    setCurrentStep((s) => Math.min(s + 1, 5))
  }

  function handleBack() {
    setCurrentStep((s) => Math.max(s - 1, 1))
  }

  function handleStepClick(step) {
    if (step < currentStep) {
      setCurrentStep(step)
    }
  }

  function handleChangePlan() {
    setCurrentStep(2)
  }

  return (
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
  )
}
