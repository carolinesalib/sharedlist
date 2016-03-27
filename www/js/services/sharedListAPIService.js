angular.module("starter").factory("sharedListAPI", function($http, $ionicPopup) {
  var _getLists = function () {
    return $http.get("http://apisharedlist-sharedlist.rhcloud.com/sharedlist");
  };

  var _getList = function (idList) {
    return $http.get("http://apisharedlist-sharedlist.rhcloud.com/sharedlist/"+idList);
  };

  var _saveList = function (sharedList) {
    return $http({
      method: 'POST',
      data: sharedList,
      url: 'http://apisharedlist-sharedlist.rhcloud.com/sharedlist'
    }).then(function successCallback(response) {
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
  };

  var _updateList = function (sharedList) {
    return $http({
      method: 'PUT',
      data: sharedList,
      url: 'http://apisharedlist-sharedlist.rhcloud.com/sharedlist/' + sharedList.id
    }).then(function successCallback(response) {
        $ionicPopup.alert({
          title: 'Success',
          content: 'Atualizado com sucesso!'
        });
      }, function errorCallback(response) {
        $ionicPopup.alert({
          title: 'Error',
          content: 'Ocorreu um problema ao salvar, você está mesmo conectado à internet?'
        });
      });
  };

  return {
    getLists   : _getLists,
    getList    : _getList,
    saveList   : _saveList,
    updateList : _updateList
  };
});
