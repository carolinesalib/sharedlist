angular.module("starter").factory ('PouchDBService', function () {
  var _db = new PouchDB('sharedlist'),
    // remote = 'http://url_remote_couchdb', 
    opts = {
      continuous: true
    };

    function _replicate() {
      _db.replicate.to(remote, opts);
      _db.replicate.from(remote, opts);
    }

    function _getAllDocs() {

    }

    return {
      db : _db,
      replicate  : _replicate
    };
});
