angular.module("starter").factory ('StorageService', function ($localStorage) {
  var _getAllLists = function () {
    return $localStorage.lists;
  };
  var _addLists = function (lists) {
    $localStorage.lists = lists;
  }
  var _addList = function (lists) {
    $localStorage.lists.push(lists);
  }
  var _removeList = function (lists) {
    $localStorage.lists.splice($localStorage.lists.indexOf(lists), 1);
  }
  var _updateList = function (list) {
    _removeList(list);
    _addList(list);
  }
  var _addPendingRequest = function (request) {
    $localStorage.pendingRequest.push(request);
  }
  var _removePendingRequest = function (request) {
    $localStorage.pendingRequest.splice($localStorage.pendingRequest.indexOf(request), 1);
  }
  var _getAllItens = function (listId) {
    var itens = _.filter($localStorage.itens, function(num){ return num.list_id == listId; });

    if (_.isEmpty(itens)){
        return null;
    }
    return itens;
  };
  var _addItens = function (itens) {

    if (_.isArray(itens)) {
      $localStorage.itens = _.union($localStorage.itens, itens);
    } else {
      $localStorage.itens.push(itens);
    }
  }
  var _removeItens = function (itens) {
    $localStorage.itens.splice($localStorage.itens.indexOf(itens), 1);
  }
  var _updateItens = function (itens) {
    _removeItens(itens);
    _addItens(itens);
  }
  return {
    getAllLists : _getAllLists,
    addLists    : _addLists,
    addList     : _addList,
    removeList  : _removeList,
    updateList  : _updateList,
    addPendingRequest    : _addPendingRequest,
    removePendingRequest : _removePendingRequest,
    getAllItens  : _getAllItens,
    addItens     : _addItens,
    removeItens  : _removeItens,
    updateItens  : _updateItens,
  };
});
