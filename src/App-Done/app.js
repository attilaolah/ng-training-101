'use strict';

// Declare app level module which depends on filters, and services
angular.module('demo', 
		[
		 'ngRoute',
		 'demo.services',
		 'demo.store',
		 'demo.product',
		 'demo.cart'
		])
	.config(['$routeProvider', function($routeProvider) {
	    $routeProvider.when('/store', 
    		{
    			templateUrl: 'partials/store.html', 
    			controller: 'StoreCtrl'
    		}
	    );
	    $routeProvider.when('/store/:productId', 
    		{
    			templateUrl: 'partials/product.html', 
    			controller: 'ProductCtrl'
    		}
    	);
	    $routeProvider.when('/cart', 
	    		{
	    			templateUrl: 'partials/cart.html', 
	    			controller: 'CartCtrl'
	    		}
	    	);
	    $routeProvider.otherwise({redirectTo: 'store'});
	}])
	;