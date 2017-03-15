myAppModule.factory('productsFactory', function(){
	var products = [];
	var factory = {};
	factory.getProducts = function(callback){
			callback(products)
	}
	factory.add_product = function(new_product){
		new_product.qtyAvailable = Math.floor(Math.random()*50)+1;
		products.push(new_product);
		console.log(products);
	}
	factory.delete = function(idx){
			var product_delete = products[idx]
			products.splice(products.indexOf(product_delete),1)
	}

	factory.buy_product = function(idx) {
		var product_buy = products[idx];
		if (product_buy.qtyAvailable > 0) {
			product_buy.qtyAvailable--;
		}
		
	}
	return factory;
});