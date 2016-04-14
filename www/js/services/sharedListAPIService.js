angular.module("starter").factory("sharedListAPI", function($http) {
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
    });
  };

  var _updateList = function (sharedList) {
    return $http({
      method: 'PUT',
      data: sharedList,
      url: 'http://apisharedlist-sharedlist.rhcloud.com/sharedlist/' + sharedList.id
    });
  };

  var _deleteList = function (sharedList) {
    return $http({
      method: 'DELETE',
      url: 'http://apisharedlist-sharedlist.rhcloud.com/sharedlist/' + sharedList.id
    });
  };

  var _getItens = function (sharedlist) {
    return $http.get("http://apisharedlist-sharedlist.rhcloud.com/item/"+sharedlist.id);
  };

  var _saveItem = function (item) {
    return $http({
      method: 'POST',
      data: item,
      url: 'http://apisharedlist-sharedlist.rhcloud.com/item'
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
    saveItem   : _saveItem
  };
});
