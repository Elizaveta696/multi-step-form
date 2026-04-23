import { useState } from 'react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/
const NAME_CHARS_REGEX = /^[\p{L}\s'\-]+$/u
const EMOJI_REGEX = /\p{Extended_Pictographic}/u

export function validateStep1(formData) {
  const errors = {}

  const name = formData.name.trim()
  if (!name) {
    errors.name = 'This field is required'
  } else if (EMOJI_REGEX.test(name) || !NAME_CHARS_REGEX.test(name)) {
    errors.name = 'Please enter a valid name'
  } else if ((name.match(/\p{L}/gu) || []).length < 2) {
    errors.name = 'Please enter a valid name'
  }

  const email = formData.email.trim()
  if (!email) {
    errors.email = 'This field is required'
  } else if (EMOJI_REGEX.test(email) || !EMAIL_REGEX.test(email)) {
    errors.email = 'Please enter a valid email address'
  }

  const phone = formData.phone.trim()
  if (!phone) {
    errors.phone = 'This field is required'
  } else if (EMOJI_REGEX.test(phone) || !PHONE_REGEX.test(phone)) {
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
