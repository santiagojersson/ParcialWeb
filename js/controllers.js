myApp=angular.module('myApp',[]);
myApp.controller('cargarProductos',function($scope,$http){
	$scope.importar= function(){
		$http.get('datosParcial.json').success(function(datos){
			$scope.productos=datos;
		});
	}
	$scope.importar();
};