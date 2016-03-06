angular.module('starter.controllers', [])

.controller('sharedListCtrl', function($scope, $stateParams, $http, sharedListAPI) {

    //Valores de usuário e compartilhamento fixos por enquanto
    $scope.list = {
      name: null,
      user_id: 1,
      shared: false
    };
    $scope.lists = {};

    $scope.doRefresh = function() {
      sharedListAPI.getLists()
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
      sharedListAPI.saveList(list);
    };

    $scope.getLists = function(){
      return $scope.lists;
    };
})

.controller('listCtrl', function($scope, $stateParams, sharedListAPI) {

  if ($stateParams.listId) {
     $scope.currentList = sharedListAPI.getList($stateParams.listId)
      .success(function(list) {
        $scope.currentList = list;
      })
      .finally(function() {
      });
   }

});
