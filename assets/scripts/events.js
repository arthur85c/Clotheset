const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
    .then(ui.createSuccess)
    .catch(ui.createFail)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signoutSuccess)
    .catch(ui.signoutFail)
}

const onNewProduct = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createProduct(data)
    .then(ui.createProductSuccess)
    .catch()
}

const onUpdateProduct = function (event) {
  event.preventDefault()
  const id = event.target.getAttribute('data-id')
  const data = getFormFields(event.target)
  api.updateProduct(id, data)
    .then(ui.updateSuccess)
    .catch()
}

const onDeleteProduct = function (event) {
  event.preventDefault()
  const id = event.target.getAttribute('data-id')
  api.deleteProduct(id)
    .then(ui.deleteSuccess)
    .catch()
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changeSuccess)
    .catch(ui.changeFail)
}

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onNewProduct,
  onUpdateProduct,
  onDeleteProduct,
  onChangePassword
}
