'use strict';

angular.module(
		'demo.store',
		[ 'demo.services' ]
)
.controller('StoreCtrl', ['$scope', 'storeService', '$routeParams',
                          function($scope, storeService, $routeParams) {
	$scope.store = [];
	
	storeService.productList(function(result) {
		$scope.store.products = result.data;
	});
	
}])
;
