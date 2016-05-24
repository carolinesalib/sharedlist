angular.module('starter')

//Controller para tratar uma lista específica
.controller('listCtrl', function($scope, $stateParams, sharedListAPI, $location, $ionicPopup, PouchDBService, $ionicPlatform) {

    $scope.item = {
      name: null,
      user_id: 1,
      checked: false,
      list_id: $stateParams.listId
    };

    $ionicPlatform.ready(function() {
      if ($stateParams.listId) {
         PouchDBService.db.get($stateParams.listId).then(function(doc) {
           $scope.list = doc;
         }).catch(function (err) {
           console.log(err);
         });
      }
    });

   $scope.updateList = function(list){
     PouchDBService.db.get($stateParams.listId).then(function(doc) {
        return PouchDBService.db.put({
           _id: doc._id,
           _rev: doc._rev,
           name: list.name,
           shared: list.shared
         });
       }).then(function(response) {
         $location.path('app/list/'+list._id);
       }).catch(function (err) {
         console.log(err);
       });
   };

   $scope.deleteList = function(list){
     PouchDBService.db.get($stateParams.listId).then(function(doc) {
        return PouchDBService.db.remove(doc);
       }).then(function(response) {
         $location.path('app/lists');
       }).catch(function (err) {
         console.log(err);
       });
   };

   $scope.getItens = function(sharedlist) {
    //  var storageItens = StorageService.getAllItens(sharedlist.id);
     //
    //  if (storageItens) {
    //      $scope.itens = storageItens;
    //  } else {
    //    sharedListAPI.getItens(sharedlist)
    //     .success(function(itens){
    //       $scope.itens = itens;
    //       StorageService.addItens(itens);
    //     });
    //  }
   };

   $scope.addItem = function(item) {
     //
    //  if (item.name == null || item.name == "") return;
     //
    //  sharedListAPI.saveItem(item).then(function successCallback(response) {
    //    }, function errorCallback(response) {
    //      $scope.pendingItem.item = item;
    //      $scope.pendingItem.type = "POST";
    //      StorageService.addPendingRequest($scope.pendingItem);
    //    });
     //
    //    StorageService.addItens(item);
    //    $location.path('app/list/'+item.list_id);
     };

     $scope.updateItem = function(item) {
      //  sharedListAPI.updateItem(item).then(function successCallback(response) {
       //
      //    }, function errorCallback(response) {
      //      $ionicPopup.alert({
      //        title: 'Error',
      //        content: 'Ocorreu um problema ao salvar, você está mesmo conectado à internet?'
      //      });
      //    });
     };

    $scope.onHold = function(item){
      //  var confirmPopup = $ionicPopup.confirm({
      //    title: item.name,
      //    template: 'Deseja excluir este item?'
      //  });
       //
      //  confirmPopup.then(function(res) {
      //    if(!res) return;
       //
      //    sharedListAPI.deleteItem(item).then(function successCallback(response) {
      //       $scope.getItens($scope.list);
      //      }, function errorCallback(response) {
      //        $ionicPopup.alert({
      //          title: 'Error',
      //          content: 'Ocorreu um problema ao excluir, você está mesmo conectado à internet?'
      //        });
      //      });
      //  });
     };
});
