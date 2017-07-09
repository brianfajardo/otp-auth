const admin = require('firebase-admin')
const twilio = require('./twilio')

const requestOneTimePassword = (req, res) => {
  if (!req.body.phoneNumber) {
    return res.send({ error: 'Phone number is required' }).status(422)
  }

  const phoneNumber = String(req.body.phoneNumber).replace(/[^\d]/g, '')

  admin.auth().getUser(phoneNumber)
    .then((user) => {
      // Code sent through text will be between 1000 - 9999.
      const code = Math.floor(Math.random() * 8999 + 1000)
      twilio.messages.create({
        body: `Your code is ${code}.`,
        to: phoneNumber,
        from: '+12262701843'
      }, (err) => {
        if (err) { return res.send({ error: err }).status(422) }
      })
    })
    .catch(err => res.send({ error: err }).status(422))
}