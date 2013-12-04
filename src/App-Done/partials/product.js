'use strict';

angular.module(
		'demo.product',
		[ 'demo.services' ]
)
.controller('ProductCtrl', ['$scope', 'storeService', '$routeParams',
                          function($scope, storeService, $routeParams) {
	var productId = $routeParams.productId;
	
	$scope.product = {};
	
	storeService.productRead(productId, function(result) {
		console.log(result);
		$scope.product = result.data;
	});
	
	$scope.cartAdd = function(productId) {
		storeService.cartAdd(productId, function(result) {
			
		});
	}
	
}])
;
