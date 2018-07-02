const store = require('./store.js')
const handlebars = require('./templates/products.handlebars')

const signInSuccess = function (response) {
  console.log(response)
  store.user = response.user
  console.log(store.user)
}

const showProducts = function (response) {
  console.log(response)
  const showProducts = handlebars({ products: response.products })
  $('.products').append(showProducts)
}

module.exports = {
  signInSuccess,
  showProducts
}
