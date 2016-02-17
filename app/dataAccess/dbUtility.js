"use strict";
var q = require("q"),
  pg = require("pg");

var config = require("../config.json");

var connectedDB, _instance;

var DBUtility = function () {

  var _getConnectionString = function () {
    return "postgres://" + config.database.user + ":" + config.database.password + "@" + config.database.environment + ":" +
      config.database.port + "/" + config.database.dbName;
  };

  var client=new pg.Client(_getConnectionString());

  var connect = function () {
    var defer = q.defer();
    if (connectedDB) {
      defer.resolve(connectedDB);
    }
    else {
     client.connect(function (err) {
        if (err) {
          console.log("Error while connecting to Database...\n" + err);
          defer.reject(err);
        }
        else {
          connectedDB = client;
          defer.resolve(connectedDB);
        }
      });
    }
    return defer.promise;
  };
  return {
    connect: connect
  };
};

module.exports = {
  getInstance: function () {
    if (!_instance) {
      _instance = new DBUtility();
    }
    return _instance;
  }
};
