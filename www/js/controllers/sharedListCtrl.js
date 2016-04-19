angular.module('starter')

.controller('sharedListCtrl', function($scope, $stateParams, $http, sharedListAPI, $ionicPopup, $location, StorageService) {

    //Valores de usuário e compartilhamento fixos por enquanto
    $scope.list = {
      name: null,
      user_id: 1,
      shared: false
    };
    $scope.lists = {};

    $scope.doRefresh = function() {
      var storageLists = StorageService.getAllLists();
      if (storageLists) {
        $scope.lists = storageLists;
        $scope.$broadcast('scroll.refreshComplete');
        return;
      } else {
        sharedListAPI.getLists()
         .success(function(newLists) {
           StorageService.addLists(newLists);
           $scope.lists = newLists;
         });
       }
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
    };

    //Faz requisição ao iniciar o aplicativo
    $scope.doRefresh();

    $scope.addList = function(list){

      if (list.name == null || list.name == "") return;

      sharedListAPI.saveList(list).then(function successCallback(response) {
          StorageService.addList(list);
          $location.path('app/lists');
        }, function errorCallback(response) {
          $ionicPopup.alert({
            title: 'Error',
            content: 'Ocorreu um problema ao salvar, você está mesmo conectado à internet?'
          });
        });
    };
});
