import axios from 'axios'

const ROOT_URL = 'https://us-central1-rn-otp-auth.cloudfunctions.net'

export const signUp = phoneNumber => async (dispatch) => {
  try {
    await axios.post(`${ROOT_URL}/createUser`, { phoneNumber })
    await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phoneNumber })
  } catch (err) {
    dispatch({ type: 'GENERATED_ERROR', payload: err })
  }
}

export const signIn = (phoneNumber, code) => async (dispatch) => {
  console.log('sign in form action creator!')
}