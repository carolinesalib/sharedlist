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

  return {
    getAllLists : _getAllLists,
    addLists    : _addLists,
    addList     : _addList,
    removeList  : _removeList,
    updateList  : _updateList,
    addPendingRequest    : _addPendingRequest,
    removePendingRequest : _removePendingRequest
  };
});
