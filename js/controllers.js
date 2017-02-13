var misDatos=angular.module('myShop', ['rzModule', 'ui.bootstrap']);
      misDatos.controller('cargarProductos',function($scope,$http){
        $scope.importar= function(){
          $http.get('./dataParcial.json').success(function(datos){
            $scope.productos=datos;
            
          });
        }
        $scope.importar();
     
        

});



misDatos.controller('MainCtrl', function ($scope, $rootScope, $timeout, $modal) {
	 $scope.slider_translate = {
        minValue: 10000,
        maxValue: 40000,
        options: {
            ceil: 60000,
            floor: 0,
            translate: function (value) {
                return '$' + value;
            }
        }
    };

});


