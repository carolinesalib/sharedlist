angular.module('starter.controllers', [])

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
          $ionicPopup.alert({
            title: 'Success',
            content: 'Adicionado com sucesso!'
          });
        }, function errorCallback(response) {
          $ionicPopup.alert({
            title: 'Error',
            content: 'Ocorreu um problema ao salvar, você está mesmo conectado à internet?'
          });
        });

        // delete $scope.list;
    };

    $scope.getLists = function(){
      return $scope.lists;
    };

    $scope.onHold = function(list){
      var confirmPopup = $ionicPopup.confirm({
        title: list.name,
        template: 'Deseja editar esta lista?'
      });

      confirmPopup.then(function(res) {
        if(res) {
          $location.path('app/editlist/'+list.id);
        }
      });
    };
})

//Controller para tratar uma lista específica
.controller('listCtrl', function($scope, $stateParams, sharedListAPI, $location, $ionicPopup) {

    $scope.item = {
      name: null,
      user_id: 1,
      checked: false,
      list_id: $stateParams.listId
    };

   if ($stateParams.listId) {
      sharedListAPI.getList($stateParams.listId)
      .success(function(list) {
        $scope.list = list;
        $scope.getItens(list);
      })
      .finally(function() {
      });
   }

   $scope.updateList = function(list){
     sharedListAPI.updateList(list).then(function successCallback(response) {
         $ionicPopup.alert({
           title: 'Success',
           content: 'Atualizado com sucesso!'
         });
         $location.path('app/lists');
       }, function errorCallback(response) {
         $ionicPopup.alert({
           title: 'Error',
           content: 'Ocorreu um problema ao salvar, você está mesmo conectado à internet?'
         });
       });
   };

   $scope.deleteList = function(list){
     sharedListAPI.deleteList(list).then(function successCallback(response) {
         $ionicPopup.alert({
           title: 'Success',
           content: 'Excluído com sucesso!'
         });
         $location.path('app/lists');
       }, function errorCallback(response) {
         $ionicPopup.alert({
           title: 'Error',
           content: 'Ocorreu um problema ao excluir, você está mesmo conectado à internet?'
         });
       });
   };

   $scope.getItens = function(sharedlist) {
       sharedListAPI.getItens(sharedlist)
       .success(function(itens) {
         $scope.itens = itens;
       })
       .finally(function() {
       });
   };

   $scope.addItem = function(item) {

     if (item.name == null || item.name == "") return;

     sharedListAPI.saveItem(item).then(function successCallback(response) {
         $ionicPopup.alert({
           title: 'Success',
           content: 'Adicionado com sucesso!'
         });
          $location.path('app/list/'+item.list_id);
          delete $scope.item;
       }, function errorCallback(response) {
         $ionicPopup.alert({
           title: 'Error',
           content: 'Ocorreu um problema ao salvar, você está mesmo conectado à internet?'
         });
       });
   };
});
