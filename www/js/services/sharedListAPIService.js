angular.module("starter").factory("sharedListAPI", function($http) {
  var urlApi = "http://apisharedlist-sharedlist.rhcloud.com/";
  var _getLists = function () {
    return $http.get(urlApi+"sharedlist");
  };

  var _getList = function (idList) {
    return $http.get(urlApi+"sharedlist/"+idList);
  };

  var _saveList = function (sharedList) {
    return $http({
      method: 'POST',
      data: sharedList,
      url: urlApi+"sharedlist"
    });
  };

  var _updateList = function (sharedList) {
    return $http({
      method: 'PUT',
      data: sharedList,
      url: urlApi+"sharedlist/" + sharedList.id
    });
  };

  var _deleteList = function (sharedList) {
    return $http({
      method: 'DELETE',
      url: urlApi+"sharedlist/" + sharedList.id
    });
  };

  var _getItens = function (sharedlist) {
    return $http.get(urlApi+"item/"+sharedlist.id);
  };

  var _saveItem = function (item) {
    return $http({
      method: 'POST',
      data: item,
      url: urlApi+"item"
    });
  };

  var _updateItem = function (item) {
    return $http({
      method: 'PUT',
      data: item,
      url: urlApi+"item/"+item.id
    });
  };

  var _deleteItem = function (item) {
    return $http({
      method: 'DELETE',
      url: urlApi+"item/"+item.id
    });
  };

  return {
    //Sharedlists
    getLists   : _getLists,
    getList    : _getList,
    saveList   : _saveList,
    updateList : _updateList,
    deleteList : _deleteList,
    //Itens
    getItens   : _getItens,
    saveItem   : _saveItem,
    updateItem : _updateItem,
    deleteItem : _deleteItem
  };
});
