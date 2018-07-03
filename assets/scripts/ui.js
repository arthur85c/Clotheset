const store = require('./store.js')
const handlebars = require('./templates/products.handlebars')
const events = require('./events.js')
const api = require('./api.js')

const signInSuccess = function (response) {
  store.user = response.user
}

const showProducts = function (response) {
  $('.products').html(' ')
  const showProducts = handlebars({ products: response.products })
  $('.products').append(showProducts)
}

const signoutSuccess = function (response) {
  $('.products').html(' ')
  console.log('You signed out!')
}

const createProductSuccess = function (response) {
  api.findProducts()
    .then(showProducts)
  $('.').html('')
}

const deleteSuccess = function (response) {
  api.findProducts()
    .then(showProducts)
}

module.exports = {
  signInSuccess,
  showProducts,
  signoutSuccess,
  createProductSuccess,
  deleteSuccess
}
