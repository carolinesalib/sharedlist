angular.module('starter.controllers', [])

.controller('sharedListCtrl', function($scope, $stateParams, $http) {

    //Valores de usuário e compartilhamento fixos por enquanto
    $scope.list = [
      name = null,
      user_id = 1,
      shared = false
    ];

    $scope.doRefresh = function() {
      $http.get('http://localhost:8000/api/v1/sharedlist')
       .success(function(newLists) {
         $scope.lists = newLists;
       })
       .finally(function() {
         // Stop the ion-refresher from spinning
         $scope.$broadcast('scroll.refreshComplete');
       });
    };

    //Faz requisição ao iniciar o aplicativo
    $scope.doRefresh();

    $scope.addList = function(list){

    };

    $scope.getLists = function(){
      return $scope.lists;
    };

    $scope.getList = function(id){
      return $scope.lists[id];
    };
});
