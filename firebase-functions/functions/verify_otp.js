const admin = require('firebase-admin')

const verifyOneTimePassword = (req, res) => {
  const { phoneNumber, code } = req.body
  if (!phoneNumber || !code) {
    return res.send({ error: 'Phone number and code is required.' }).status(422)
  }

  const userProvidedNumber = String(phoneNumber).replace(/[^\d]/g, '')
  const userProvidedCode = parseInt(code)

  admin.auth().getUser(userProvidedNumber)
    .then(() => {
      const ref = admin.database().ref(`users/${userProvidedNumber}`)
      // Look at users collection and phone number as the key.
      // When a reference is found, call callback with a snapshot of the node.
      ref.on('value', (snapshot) => {
        // database.ref() is actively still searching, once a ref is found,
        // do not attempt to listen to anymore value changes.
        ref.off()
        const user = snapshot.val()
        if (userProvidedCode !== user.code || !user.isValid) {
          return res.send({ error: 'Invalid code' }).status(422)
        }
        // If userProvidedCode passes the above check,
        // flip code isValid flag then send a JSON web token.
        ref.update({ isValid: false })
        admin.auth().createCustomToken(userProvidedNumber)
          .then(token => res.send(token).status(200))
      })
    })
    .catch(err => res.send({ error: err }).status(422))
}