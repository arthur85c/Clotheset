const store = require('./store.js')
const handlebars = require('./templates/products.handlebars')
const api = require('./api.js')

const signInSuccess = function (response) {
  store.user = response.user
  api.findProducts()
    .then(showProducts)
  $('.buttons').html(`<div class="get-Products"><button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span></button></div>
  <div class="signOut">
  <button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-log-out" aria-hidden="true"></span></button>
  </div>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
  <div class="modal-content">
  <div class="modal-header">
  <h3 class="modal-title" id="exampleModalLongTitle">New Products</h3>
  </div>
  <div class="modal-body">
  <form class="new-product">
  <div class="form-group col-xs-6 col-sm-6">
  <label>Item Name</label>
  <input type="text" class="form-control" name="product[name]" placeholder="ex: Yeezy 350 V2" required>
  </div>
  <div class="form-group col-xs-6 col-sm- 6">
  <label>Brand</label>
  <input type="text" class="form-control" name="product[brand]" placeholder="ex: Supreme, Adidas, etc." required>
  </div>
  <div class="form-group col-xs-3 col-sm-3">
  <label>Category</label>
  <select class="form-control" name="product[category]">
  <option>T-shirt</option>
  <option>Shirts</option>
  <option>Jacket</option>
  <option>Sweater</option>
  <option>Sweatshirt</option>
  <option>Pants</option>
  <option>Shorts</option>
  <option>Accessories</option>
  <option>Hats</option>
  <option>Bags</option>
  <option>Shoes</option>
  <option>Skates</option>
  </select>
  </div>
  <div class="form-group col-xs-3 col-sm- 3">
  <label>Size</label>
  <input type="text" class="form-control" name="product[size]" placeholder="ex: (Shirts) S, M, (Shoes) Size 10, Size 13, (Pants) 29, 30, 31" required>
  </div>
  <div class="form-group col-xs-3 col-sm-3">
  <label>Price</label>
  <input type="text" class="form-control" name="product[sell_price]" placeholder="In USD, without $ sign " required>
  </div>
  <div class="form-group col-xs-3 col-sm-3">
  <label>Color</label>
  <input type="text" class="form-control" name="product[color]" placeholder="In USD, without $ sign " required>
  </div>
  <div class="form-group col-xs-6 col-sm-6">
  <label>Picture URL</label>
  <input type="text" class="form-control" name="product[picture_url]" placeholder="ex: https://stockx-360.imgix.net/Adidas-Yeezy-Boost-350-V2-Butter/Images/Adidas-Yeezy-Boost-350-V2-Butter/Lv2/img36.jpg?auto=format,compress&w=1117&q=90" required>
  </div>
  <div class="form-check" id="createButton">
  <div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
  <button type="submit" class="btn btn-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></button>
  </div>
  </div>
  </form>
  </div>
  </div>
  </div>
  </div>`)
  $('.sign-in').html(' ')
  $('.sign-up').html(' ')
}

const showProducts = function (response) {
  $('.products').html(' ')
  const showProducts = handlebars({ products: response.products })
  $('.products').append(showProducts)
}

const signoutSuccess = function (response) {
  $('.products').html(' ')
  $('.buttons').html(' ')
  $('.sign-in').html(`
    <h2>Sign In</h2>
    <form id="login-form">
      <div class="form-group col-xs-6 col-sm-6">
        <label>Email address</label>
        <input type="text" class="form-control" name="credentials[email]" placeholder="example@example.com">
      </div>
      <div class="form-group col-xs-6 col-sm-6">
        <label>Password</label>
        <input type="password" class="form-control" name="credentials[password]">
      </div>
      <div class="form-check">
        <button type="submit" class="btn btn-primary"><span class="glyphicon glyphicon-log-in" aria-hidden="true"></button>
      </div>
    </form>`)
  $('.sign-up').html(`
    <h2>Sign up</h2>
    <form id="sign-up-form">
      <div class="form-group col-xs-4 col-sm-4">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" name="credentials[email]" placeholder="example@example.com">
      </div>
      <div class="form-group col-xs-4 col-sm-4">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" name="credentials[password]">
      </div>
      <div class="form-group col-xs-4 col-sm-4">
        <label for="exampleInputPassword1">Password Confirmation</label>
        <input type="password" class="form-control" name="credentials[password_confirmation]">
      </div>
      <div class="form-check">
        <button type="submit" class="btn btn-primary"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></button>
      </div>
    </form>`)
}

const createProductSuccess = function (response) {
  api.findProducts()
    .then(showProducts)
  $('.alerts').html(```
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
    Product have been created!
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>```)
}

const deleteSuccess = function (response) {
  api.findProducts()
    .then(showProducts)
}

const updateSuccess = function (response) {
  api.findProducts()
    .then(showProducts)
}

module.exports = {
  signInSuccess,
  showProducts,
  signoutSuccess,
  createProductSuccess,
  deleteSuccess,
  updateSuccess
}
