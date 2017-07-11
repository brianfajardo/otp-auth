const check = (value, expectedLength) => {
  return (!value || value.length < expectedLength || value.trim() === '')
}

export const signUpValidator = ({ phoneNumber }) => {
  const errors = {}
  if (check(phoneNumber, 10)) {
    errors.phoneNumber = 'Sign up with your 10 digit phone number!'
  }
  return errors
}

export const signInValidator = ({ phoneNumber, code }) => {
  const errors = {}
  if (check(phoneNumber, 10)) {
    errors.phoneNumber = 'Sign in with your 10 digit phone number!'
  }
  if (check(code, 4)) {
    errors.code = 'Invalid code'
  }
  return errors
}