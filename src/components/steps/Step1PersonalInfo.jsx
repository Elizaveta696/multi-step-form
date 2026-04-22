import { useState } from 'react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/

export function validateStep1(formData) {
  const errors = {}
  if (!formData.name.trim()) {
    errors.name = 'This field is required'
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Please enter a valid name'
  }
  if (!formData.email.trim()) {
    errors.email = 'This field is required'
  } else if (!EMAIL_REGEX.test(formData.email.trim())) {
    errors.email = 'Please enter a valid email address'
  }
  if (!formData.phone.trim()) {
    errors.phone = 'This field is required'
  } else if (!PHONE_REGEX.test(formData.phone.trim())) {
    errors.phone = 'Please enter a valid phone number'
  }
  return errors
}

export default function Step1PersonalInfo({ formData, onChange, externalErrors }) {
  const [touched, setTouched] = useState({})

  const errors = validateStep1(formData)
  const visibleErrors = Object.fromEntries(
    Object.entries(errors).filter(([key]) => touched[key] || externalErrors?.[key])
  )

  function handleBlur(field) {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  return (
    <div className="step-content">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <form id="step-1-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Stephen King"
            value={formData.name}
            onChange={(e) => onChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            className={visibleErrors.name ? 'invalid' : ''}
          />
          {visibleErrors.name && (
            <span className="error-message">{visibleErrors.name}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e.g. stephen@lorem.com"
            value={formData.email}
            onChange={(e) => onChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            className={visibleErrors.email ? 'invalid' : ''}
          />
          {visibleErrors.email && (
            <span className="error-message">{visibleErrors.email}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="e.g. +358 234 567 890"
            value={formData.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            onBlur={() => handleBlur('phone')}
            className={visibleErrors.phone ? 'invalid' : ''}
          />
          {visibleErrors.phone && (
            <span className="error-message">{visibleErrors.phone}</span>
          )}
        </div>
      </form>
    </div>
  )
}
