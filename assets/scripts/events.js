const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.createSuccess)
    .catch()
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('Hi')
  console.log(getFormFields(event.target))
  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch()
}

const onGetProducts = function (event) {
  event.preventDefault()
  console.log('Products')

  api.findProducts()
    .then(ui.showProducts)
    .catch()
}
module.exports = {
  onSignIn,
  onSignUp,
  onGetProducts
}
