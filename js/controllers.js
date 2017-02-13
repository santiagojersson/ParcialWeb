var misDatos=angular.module('myShop', ['rzModule', 'ui.bootstrap']);
misDatos.controller('cargarProductos',function($scope,$http	){
	$scope.importar= function(){
		$http.get('./dataParcial.json').success(function(datos){
			$scope.productos=datos;
		});
	}

	$scope.importar();
});

misDatos.filter('rangePrice', function(){
    return function(productos, min, max){
        var filtered = [];

        angular.forEach(productos, function(product){
        	console.log(Number(product.price)*1000);
            if((Number(product.price)*1000) >= min && (Number(product.price)*1000)<= max)
                filtered.push(product);
        });
        return filtered;
    };
});
