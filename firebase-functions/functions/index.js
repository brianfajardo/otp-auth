const admin = require('firebase-admin')
const functions = require('firebase-functions')

const serviceAccount = require('./service_account.json')
const createUser = require('./create_user')
const requestOneTimePassword = require('./request_otp')
const verifyOneTimePassword = require('./verify_otp')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://rn-otp-auth.firebaseio.com"
})

// Wrapping controllers with Firebase's functions' methods.
exports.createUser = functions.https.onRequest(createUser)
exports.requestOneTimePassword = functions.https.onRequest(requestOneTimePassword)
exports.verifyOneTimePassword = functions.https.onRequest(verifyOneTimePassword)