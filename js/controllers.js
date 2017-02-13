var misDatos= angular.module('myShop',[]);
      misDatos.controller('cargarProductos',function($scope,$http){
        $scope.importar= function(){
          $http.get('./dataParcial.json').success(function(datos){
            $scope.productos=datos;
            
          });
        }
        $scope.importar();
     
        

});


