const store = require('./store.js')

const signInSuccess = function (response) {
  console.log(response)
  store.user = response.user
  console.log(store.user)
}

const showProducts = function (response) {
  console.log(response)
}

module.exports = {
  signInSuccess,
  showProducts
}
