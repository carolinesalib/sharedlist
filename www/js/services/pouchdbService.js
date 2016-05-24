angular.module("starter").factory ('PouchDBService',  ['urlRemoteCouchdbServer', function (urlRemoteCouchdbServer) {
  var _db = new PouchDB('sharedlist'),
    remote = urlRemoteCouchdbServer,
    opts = {
      continuous: true
    };

    function _replicate() {
      _db.replicate.to(remote, opts);
      _db.replicate.from(remote, opts);
    }

    return {
      db : _db,
      replicate  : _replicate
    };
}]);
