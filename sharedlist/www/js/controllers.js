angular.module('starter.controllers', [])

.controller('sharedListCtrl', function($scope, $stateParams, $http, sharedListAPI) {

    //Valores de usuário e compartilhamento fixos por enquanto
    $scope.list = {
      name: null,
      user_id: 1,
      shared: false
    };
    $scope.currentList = null;
    $scope.currentList = {};
    $scope.lists = {};

    $scope.doRefresh = function() {
      sharedListAPI.getLists()
       .success(function(newLists) {
         $scope.lists = newLists;
         $scope.updateCurrentList();
       })
       .finally(function() {
         // Stop the ion-refresher from spinning
         $scope.$broadcast('scroll.refreshComplete');
       });
    };

    //Faz requisição ao iniciar o aplicativo
    $scope.doRefresh();

    $scope.updateCurrentList = function() {
      if ($stateParams.listId) {
         $scope.currentList = $scope.lists[$stateParams.listId];
      }
    }

    $scope.addList = function(list){
      sharedListAPI.saveList(list);
    };

    $scope.getLists = function(){
      return $scope.lists;
    };


});
