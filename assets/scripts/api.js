'use strict'
const store = require('./store.js')
const config = require('./config.js')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const findProducts = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/products',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createProduct = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/products',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const updateProduct = function (id, data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/products/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  }
  )
}

const deleteProduct = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/products/' + data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  }
  )
}

module.exports = {
  signUp,
  signIn,
  findProducts,
  changePassword,
  signOut,
  createProduct,
  updateProduct,
  deleteProduct
}
