'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')

$(() => {
  $('.sign-in').on('submit', '#login-form', events.onSignIn)
  $('.sign-up').on('submit', '#sign-up-form', events.onSignUp)
  $('.get-Products').on('click', events.onGetProducts)
  $('.signOut').on('click', events.onSignOut)
  $('.new-product').on('submit', events.onNewProduct)
})
