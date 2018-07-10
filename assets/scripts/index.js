'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')

$(() => {
  $('.sign-in').on('submit', '#login-form', events.onSignIn)
  $('.sign-up').on('submit', '#sign-up-form', events.onSignUp)
  $('.buttons').on('click', '.signOut', events.onSignOut)
  $('.buttons').on('submit', '.new-product', events.onNewProduct)
  $('.products').on('submit', '.update-product', events.onUpdateProduct)
  $('.products').on('click', '.btn-danger', events.onDeleteProduct)
  $('.products').on()
})
