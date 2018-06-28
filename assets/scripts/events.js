

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.createSuccess)
    .catch(ui.createFail)
}

module.exports = {
  onSignIn
}
