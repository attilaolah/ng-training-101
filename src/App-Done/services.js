'use strict';

// Services
// ScriptureForge common services
angular.module('demo.services', [])
	.service('storeService', [function() {
		var store = {};
		store.products = {
		'1' : {
			image : '../images/tech01.png',
			name : 'Some name',
			price : 10.00,
			description : 'Some description'
		},
		'2' : {
			image : '../images/tech02.png',
			name : 'Some name',
			price : 10.00,
			description : 'Some description'
		},
		'3' : {
			image : '../images/tech03.png',
			name : 'Some name',
			price : 10.00,
			description : 'Some description'
		},
		'4' : {
			image : '../images/tech04.png',
			name : 'Some name',
			price : 10.00,
			description : 'Some description'
		},
		'5' : {
			image : '../images/tech05.png',
			name : 'Some name',
			price : 10.00,
			description : 'Some description'
		},
		'6' : {
			image : '../images/tech06.png',
			name : 'Some name',
			price : 10.00,
			description : 'Some description'
		},
		'7' : {
			image : '../images/tech07.png',
			name : 'Some name',
			price : 10.00,
			description : 'Some description'
		},
		'8' : {
			image : '../images/tech08.png',
			name : 'Some name',
			price : 10.00,
			description : 'Some description'
		},
		'9' : {
			image : '../images/tech09.png',
			name : 'Some name',
			price : 10.00,
			description : 'Some description'
		},
		'10' : {
			image : '../images/tech10.png',
			name : 'Some name',
			price : 10.00,
			description : 'Some description'
		},
		'11' : {
			image : '../images/tech11.png',
			name : 'Some name',
			price : 10.00,
			description : 'Some description'
		},
		'12' : {
			image : '../images/tech12.png',
			name : 'Some name',
			price : 10.00,
			description : 'Some description'
		},
		'13' : {
			image : '../images/tech13.png',
			name : 'Some name',
			price : 10.00,
			description : 'Some description'
		}
	};
	
	this.productList = function(callback) {
		var result = {};
		result.data = store.products;
		callback(result);
	};
	this.productRead = function(productId, callback) {
		var result = {};
		console.log(productId);
		result.data = store.products[productId];
		callback(result);
	} 

	// CART
	var cart = {};
	cart.items = [];
	this.cartList = function(callback) {
		var items = [];
		for (var i = 0; i < cart.items.length; i++) {
			var productId = cart.items[i].productId;
			var item = {
				'productId': productId,
				'quantity': cart.items[i].quantity,
				'product': store.products[productId],
				'total': cart.items[i].quantity * store.products[productId].price
			};
			items.push(item);
		}
		var result = {};
		result.data = items;
		callback(result);
	}
	this.cartAdd = function(productId, callback) {
		var found = false;
		for (var i = 0; !found && i < cart.items.length; i++) {
			if (cart.items[i].productId == productId) {
				found = true;
				cart.items[i].quantity++;
			}
		}
		if (!found) {
			var item = {
				'productId': productId,
				'quantity': 1
			};
			cart.items.push(item);
		}
	};
	this.cartRemove = function(productId, callback) {
		for (var i = 0; i < cart.items.length; i++) {
			if (cart.items[i].productId == productId) {
				cart.items.splice(i, 1);
				break;
			}
		}
	};
	this.cartEmpty = function(callback) {
		cart.items = [];
	}
	this.cartCount = function() {
		return cart.items.length;
	}
}])
;