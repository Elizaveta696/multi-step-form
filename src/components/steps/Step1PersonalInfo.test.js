import { describe, it, expect } from 'vitest'
import { validateStep1 } from './Step1PersonalInfo.jsx'

function makeData(overrides = {}) {
  return { name: '', email: '', phone: '', ...overrides }
}

// Name
describe('validateStep1 — name', () => {
  it('requires a name', () => {
    const errors = validateStep1(makeData())
    expect(errors.name).toBe('This field is required')
  })

  it('treats whitespace-only name as empty', () => {
    const errors = validateStep1(makeData({ name: '   ' }))
    expect(errors.name).toBe('This field is required')
  })

  it('accepts a plain first + last name', () => {
    const errors = validateStep1(makeData({ name: 'Stephen King' }))
    expect(errors.name).toBeUndefined()
  })

  it('accepts a name with a hyphen', () => {
    const errors = validateStep1(makeData({ name: 'Anne-Marie' }))
    expect(errors.name).toBeUndefined()
  })

  it("accepts a name with an apostrophe (O'Brien)", () => {
    const errors = validateStep1(makeData({ name: "O'Brien" }))
    expect(errors.name).toBeUndefined()
  })

  it('accepts non-ASCII letters (ä, ö, é)', () => {
    const errors = validateStep1(makeData({ name: 'Ääriö' }))
    expect(errors.name).toBeUndefined()
  })

  it('rejects a name that is a single letter', () => {
    const errors = validateStep1(makeData({ name: 'A' }))
    expect(errors.name).toBe('Please enter a valid name')
  })

  it('rejects a name containing digits', () => {
    const errors = validateStep1(makeData({ name: 'John 3' }))
    expect(errors.name).toBe('Please enter a valid name')
  })

  it('rejects a name containing an emoji', () => {
    const errors = validateStep1(makeData({ name: 'John 😀' }))
    expect(errors.name).toBe('Please enter a valid name')
  })

  it('rejects a name that is only punctuation', () => {
    const errors = validateStep1(makeData({ name: "---" }))
    expect(errors.name).toBe('Please enter a valid name')
  })
})

// Email
describe('validateStep1 — email', () => {
  it('requires an email', () => {
    const errors = validateStep1(makeData())
    expect(errors.email).toBe('This field is required')
  })

  it('treats whitespace-only email as empty', () => {
    const errors = validateStep1(makeData({ email: '   ' }))
    expect(errors.email).toBe('This field is required')
  })

  it('accepts a standard email address', () => {
    const errors = validateStep1(makeData({ email: 'user@example.com' }))
    expect(errors.email).toBeUndefined()
  })

  it('accepts email with subdomain', () => {
    const errors = validateStep1(makeData({ email: 'user@mail.example.co.uk' }))
    expect(errors.email).toBeUndefined()
  })

  it('accepts email with plus alias', () => {
    const errors = validateStep1(makeData({ email: 'user+tag@example.com' }))
    expect(errors.email).toBeUndefined()
  })

  it('rejects email with no @', () => {
    const errors = validateStep1(makeData({ email: 'userexample.com' }))
    expect(errors.email).toBe('Please enter a valid email address')
  })

  it('rejects email with no domain', () => {
    const errors = validateStep1(makeData({ email: 'user@' }))
    expect(errors.email).toBe('Please enter a valid email address')
  })

  it('rejects email with no TLD', () => {
    const errors = validateStep1(makeData({ email: 'user@example' }))
    expect(errors.email).toBe('Please enter a valid email address')
  })

  it('rejects email containing an emoji', () => {
    const errors = validateStep1(makeData({ email: 'user😀@example.com' }))
    expect(errors.email).toBe('Please enter a valid email address')
  })

  it('rejects email with spaces', () => {
    const errors = validateStep1(makeData({ email: 'user @example.com' }))
    expect(errors.email).toBe('Please enter a valid email address')
  })
})

// Phone
describe('validateStep1 — phone', () => {
  it('requires a phone number', () => {
    const errors = validateStep1(makeData())
    expect(errors.phone).toBe('This field is required')
  })

  it('treats whitespace-only phone as empty', () => {
    const errors = validateStep1(makeData({ phone: '   ' }))
    expect(errors.phone).toBe('This field is required')
  })

  it('accepts an international number with country code', () => {
    // regex supports up to 3 digit groups; +CC AAA NNNNNNN fits
    const errors = validateStep1(makeData({ phone: '+358 40 1234567' }))
    expect(errors.phone).toBeUndefined()
  })

  it('accepts a number with dashes', () => {
    const errors = validateStep1(makeData({ phone: '358-09-1234567' }))
    expect(errors.phone).toBeUndefined()
  })

  it('accepts a number with parentheses', () => {
    const errors = validateStep1(makeData({ phone: '(800) 5550199' }))
    expect(errors.phone).toBeUndefined()
  })

  it('rejects a phone number containing letters', () => {
    const errors = validateStep1(makeData({ phone: 'abc-1234' }))
    expect(errors.phone).toBe('Please enter a valid phone number')
  })

  it('rejects a phone number containing an emoji', () => {
    const errors = validateStep1(makeData({ phone: '📞 123456' }))
    expect(errors.phone).toBe('Please enter a valid phone number')
  })
})

// All fields valid — no errors
describe('validateStep1 — all valid', () => {
  it('returns an empty errors object when all fields are valid', () => {
    const errors = validateStep1(
      makeData({ name: 'Jane Doe', email: 'jane@example.com', phone: '+358 40 1234567' })
    )
    expect(errors).toEqual({})
  })
})
