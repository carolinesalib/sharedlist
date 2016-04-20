angular.module('starter')

//Controller para tratar uma lista específica
.controller('listCtrl', function($scope, $stateParams, sharedListAPI, $location, $ionicPopup, StorageService) {

    $scope.item = {
      name: null,
      user_id: 1,
      checked: false,
      list_id: $stateParams.listId
    };
    $scope.pendingList = {
      type: null,
      list: null
    };
    $scope.pendingItem = {
      type: null,
      item: null
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
       }, function errorCallback(response) {
         $scope.pendingList.list = list;
         $scope.pendingList.type = "PUT";
         StorageService.addPendingRequest($scope.pendingList);
       });
       StorageService.updateList(list);
       $location.path('app/list/'+list.id);
   };

   $scope.deleteList = function(list){
     sharedListAPI.deleteList(list).then(function successCallback(response) {
       }, function errorCallback(response) {
         $scope.pendingList.list = list;
         $scope.pendingList.type = "DELETE";
         StorageService.addPendingRequest($scope.pendingList);
       });
       StorageService.removeList(list);
      $location.path('app/lists');
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
          delete $scope.item;
          $location.path('app/list/'+item.list_id);
       }, function errorCallback(response) {
         $ionicPopup.alert({
           title: 'Error',
           content: 'Ocorreu um problema ao salvar, você está mesmo conectado à internet?'
         });
       });
     };

     $scope.updateItem = function(item) {
       sharedListAPI.updateItem(item).then(function successCallback(response) {

         }, function errorCallback(response) {
           $ionicPopup.alert({
             title: 'Error',
             content: 'Ocorreu um problema ao salvar, você está mesmo conectado à internet?'
           });
         });
     };

    $scope.onHold = function(item){
       var confirmPopup = $ionicPopup.confirm({
         title: item.name,
         template: 'Deseja excluir este item?'
       });

       confirmPopup.then(function(res) {
         if(!res) return;

         sharedListAPI.deleteItem(item).then(function successCallback(response) {
            $scope.getItens($scope.list);
           }, function errorCallback(response) {
             $ionicPopup.alert({
               title: 'Error',
               content: 'Ocorreu um problema ao excluir, você está mesmo conectado à internet?'
             });
           });
       });
     };
});
