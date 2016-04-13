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

      if (sharedListAPI.saveList(list)) {
        delete $scope.list;
      }
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
.controller('listCtrl', function($scope, $stateParams, sharedListAPI, $location) {

    $scope.item = {
      name: null,
      user_id: 1,
      shared: false,
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
     if (sharedListAPI.updateList(list)) {
       $location.path('app/lists');
     }
   };

   $scope.deleteList = function(list){
     if (sharedListAPI.deleteList(list)) {
       $location.path('app/lists');
     }
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

     console.log(item);
     console.log($scope.list)
     // 
    //  if (sharedListAPI.saveItem(item)) {
    //    delete $scope.item;
    //  }
   };
});
