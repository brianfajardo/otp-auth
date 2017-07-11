import axios from 'axios'
import firebase from 'firebase'

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
  try {
    // Using let instead of const because of the async nature.
    // For example, using const, initially const data = null,
    // when Promise is resolved, data = response.data.token and using const
    // means immutability. Therefore, we use let for the flexibility it offers.
    let { data: token } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phoneNumber, code })
    firebase.auth().signInWithCustomToken(token)
  } catch (err) {
    dispatch({ type: 'GENERATED_ERROR', payload: err })
  }
}