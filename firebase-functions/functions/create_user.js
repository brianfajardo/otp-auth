const admin = require('firebase-admin')

const createUser = (req, res) => {
  if (!req.body.phoneNumber) {
    return res.send({ error: 'Phone number is required.' }).status(422)
  }

  // Format phone number to remove any non digit character.
  const phoneNumber = String(req.body.phoneNumber).replace(/[^\d]/g, "")

  // Using user's phone number as their uid
  admin.auth().createUser({ uid: phoneNumber })
    .then(user => res.send(user).status(200))
    .catch(err => res.send({ error: err }).status(422))
}

module.exports = createUser