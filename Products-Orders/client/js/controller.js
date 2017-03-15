myAppModule.controller('productsController', ['$scope', 'productsFactory', function($scope, productsFactory){
	
	$scope.products = [];
	$scope.controller_method_add = function() {
		productsFactory.add_product($scope.new_product);
		$scope.new_product = {};
			
	}

	$scope.remove = function(idx) {
		productsFactory.delete(idx);
	}

	productsFactory.getProducts(function(data) {
		$scope.products = data;
	});


}])

myAppModule.controller('ordersController', ['$scope', 'productsFactory', function($scope, productsFactory){

	$scope.buy = function(idx){
		productsFactory.buy_product(idx);
	}
	
	productsFactory.getProducts(function(data) {
		$scope.products = data;
	});
}])