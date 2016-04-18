angular.module('starter')

.controller('sharedListCtrl', function($scope, $stateParams, $http, sharedListAPI, $ionicPopup, $location) {

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

      if (list.name == null || list.name == "") return;

      sharedListAPI.saveList(list).then(function successCallback(response) {
          $location.path('app/lists');
          delete $scope.list
        }, function errorCallback(response) {
          $ionicPopup.alert({
            title: 'Error',
            content: 'Ocorreu um problema ao salvar, você está mesmo conectado à internet?'
          });
        });
    };

    $scope.getLists = function(){
      return $scope.lists;
    };
});
