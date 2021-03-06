angular.module('starter')

.controller('sharedListCtrl', function($scope, $stateParams, $http, sharedListAPI, $ionicPopup, $location, PouchDBService, $ionicPlatform) {

    //Valores de usuário e compartilhamento fixos por enquanto
    $scope.list = {
      name: null,
      user_id: 1,
      shared: false
    };
    $scope.lists = {};

    $scope.doRefresh = function() {
      PouchDBService.replicate();
      PouchDBService.db.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        $scope.lists = result.rows;
      }).catch(function (err) {
        console.log(err);
      });
      // Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    };

    $ionicPlatform.ready(function() {
      //Faz requisição ao iniciar o aplicativo
      $scope.doRefresh();
    });

    $scope.addList = function(list){

      if (list.name == null || list.name == "") return;
        PouchDBService.db.post(list).then(function (response) {
            $location.path('app/lists');
        }).catch(function (err) {
          console.log(err);
        });
    };
});
