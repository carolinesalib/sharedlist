angular.module("starter").factory("sharedListAPI", function($http) {
  var _getLists = function () {
    return $http.get("http://localhost:8000/api/v1/sharedlist");
  };
  var _saveList = function (sharedList) {
    return $http.post("http://localhost:8000/api/v1/sharedlist", sharedList);
  };

  return {
    getLists : _getLists,
    saveList : _saveList
  };
});
