'use strict'
const store = require('./store.js')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://salty-wave-53150.herokuapp.com/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://salty-wave-53150.herokuapp.com/sign-in',
    data: data
  })
}

// const changePassword = function (data) {
//   return $.ajax({
//     method: 'PATCH',
//     url: 'https://aqueous-atoll-85096.herokuapp.com/change-password',
//     data: data,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const signOut = function () {
//   return $.ajax({
//     method: 'DELETE',
//     url: 'https://aqueous-atoll-85096.herokuapp.com/sign-out',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
//
const findProducts = function () {
  return $.ajax({
    method: 'GET',
    url: 'https://salty-wave-53150.herokuapp.com/products',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
//
// const createGame = function () {
//   return $.ajax({
//     method: 'POST',
//     url: 'https://aqueous-atoll-85096.herokuapp.com/games',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const find1Game = function (data) {
//   console.log('data is ', data)
//   return $.ajax({
//     method: 'GET',
//     url: 'https://aqueous-atoll-85096.herokuapp.com/' + 'games/' + data.game.id,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const updateGame = function (data) {
//   return $.ajax({
//     method: 'PATCH',
//     url: 'https://aqueous-atoll-85096.herokuapp.com/' + 'games/' + store.newGame.id,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     body: 'game delta',
//     data
//   })
// }
//
// const updateWinLose = function (data) {
//   return $.ajax({
//     method: 'PATCH',
//     url: 'https://aqueous-atoll-85096.herokuapp.com/' + 'games/' + store.newGame.id,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     body: 'game delta',
//     data
//   })
// }

module.exports = {
  signUp,
  signIn,
  findProducts
}
