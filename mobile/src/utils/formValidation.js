export const signUpValidator = ({ phoneNumber }) => {
  const errors = {}
  if (!phoneNumber || phoneNumber.length < 10 || phoneNumber.trim() === '') {
    errors.phoneNumber = 'Sign up with your 10 digit phone number!'
  }
  return errors
}

// export const signInValidator =