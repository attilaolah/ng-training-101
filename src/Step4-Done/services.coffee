"use strict"

# Services
# ScriptureForge common services
angular.module("demo.services", [
]).service("storeService", [(->
  store =
    products:
      "1":
        image: "../images/tech01.png",
        name: "Some name",
        price: 10.00,
        description: "Some description"
      "2":
        image: "../images/tech02.png",
        name: "Some name",
        price: 10.00,
        description: "Some description"
      "3":
        image: "../images/tech03.png",
        name: "Some name",
        price: 10.00,
        description: "Some description"
      "4":
        image: "../images/tech04.png",
        name: "Some name",
        price: 10.00,
        description: "Some description"
      "5":
        image: "../images/tech05.png",
        name: "Some name",
        price: 10.00,
        description: "Some description"
      "6":
        image: "../images/tech06.png",
        name: "Some name",
        price: 10.00,
        description: "Some description"
      "7":
        image: "../images/tech07.png",
        name: "Some name",
        price: 10.00,
        description: "Some description"
      "8":
        image: "../images/tech08.png",
        name: "Some name",
        price: 10.00,
      "9":
        image: "../images/tech09.png",
        name: "Some name",
        price: 10.00,
        description: "Some description"
      "10":
        image: "../images/tech10.png",
        name: "Some name",
        price: 10.00,
        description: "Some description"
      "11":
        image: "../images/tech11.png",
        name: "Some name",
        price: 10.00,
        description: "Some description"
      "12":
        image: "../images/tech12.png",
        name: "Some name",
        price: 10.00,
        description: "Some description"
      "13":
        image: "../images/tech13.png",
        name: "Some name",
        price: 10.00,
        description: "Some description"
  
  @productList = (callback) ->
    callback
      data: store.products
  @productRead = (productId, callback) ->
    callback
      data: store.products[productId]

  # CART
  cart =
    items: []
  @cartList = (callback) ->
    items = []
    for item in cart.items
      productId = item.productID
      items.push
        productId: productId
        quantity: item.quantity
        product: store.products[productId]
        total: item.quantity * store.products[productId].price
    callback
      data: items
  @cartAdd = (productId, callback) ->
    found = false
    for item in cart.items
      if item.productId is productId
        item.quantity++
        break
    unless found
      cart.items.push
        productId: productId
        quantity: 1
  @cartRemove = (productId, callback) ->
    for item in cart.items
      if item is productID
        cart.items.splice i, 1
        break
  @cartEmpty = (callback) ->
    cart.items = []
  @cartCount = ->
    cart.items.length
  @  # important
)])
