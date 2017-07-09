const twilio = require('twilio')

const accountSid = 'ACf8c3262dc686a451acf787f73a8bd3b5'
const authToken = '4cbffd44939a6d2639f5a0ccaa75ce34'

module.exports = new twilio(accountSid, authToken)