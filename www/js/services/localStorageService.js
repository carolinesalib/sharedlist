angular.module("starter").factory ('StorageService', function ($localStorage) {
  var _getAllLists = function () {
    return $localStorage.lists;
  };
  var _addLists = function (thing) {
    $localStorage.lists = thing;
  }
  var _addList = function (thing) {
    $localStorage.lists.push(thing);
  }
  var _removeLists = function (thing) {
    $localStorage.lists.splice($localStorage.lists.indexOf(thing), 1);
  }
  return {
    getAllLists : _getAllLists,
    addLists    : _addLists,
    addList    : _addList,
    removeLists : _removeLists
  };
});
