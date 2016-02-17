"use strict";
var q = require("q");

var dbUtility = require("./dbUtility").getInstance();

var _instance;

var DataAccess = function () {

  var executeQuery = function (query) {
    var defer = q.defer();
    dbUtility.connect()
      .then(function (client) {
        client.query(query, function (err, result) {
          if (err) {
            defer.reject(err);
          }
          else {
            defer.resolve(result.rows);
          }
        });
      })
      .fail(function (err) {
        defer.reject(err);
      });
    return defer.promise;

  };

  return {
    executeQuery: executeQuery
  };

};

module.exports = {
  getInstance: function () {
    if (!_instance) {
      _instance = new DataAccess();
    }
    return _instance;
  }
};
