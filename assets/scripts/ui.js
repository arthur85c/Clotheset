const store = require('./store.js')
const handlebars = require('./templates/products.handlebars')

const signInSuccess = function (response) {
  store.user = response.user
}

const showProducts = function (response) {
  console.log(response)
  const showProducts = handlebars({ products: response.products })
  $('.products').append(showProducts)
}

const signoutSuccess = function (response) {
  $('.products').html(' ')
  console.log('You signed out!')
}

const createProductSuccess = function (response) {
  $('.products').html('Your Product have been created successfully!')
}

module.exports = {
  signInSuccess,
  showProducts,
  signoutSuccess,
  createProductSuccess
}
