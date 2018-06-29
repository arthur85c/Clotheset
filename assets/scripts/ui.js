const store = require('./store.js')

const signInSuccess = function (response) {
  console.log(response)
  store.user = response.user
  console.log(store.user)
}

module.exports = {
  signInSuccess
}
