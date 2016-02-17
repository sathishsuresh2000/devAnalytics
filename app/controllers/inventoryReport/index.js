var q = require("q");

var inventoryReportService = require("../../services/inventoryReport").getInstance(),
  constants = require("../../constants");
var _instance;

var InventoryReport = function () {
};

InventoryReport.prototype.getReport = function (req, res) {
  _validateQueryString(req.query)
    .then(function () {
      return inventoryReportService.getReport(req.query.filter)
    })
    .then(function (result) {
      res.status(constants.httpCodes.success).send(result);
    })
    .fail(function (err) {
      res.status(err.code || constants.httpCodes.internalServerError).send(err.message);
    });
};

var _validateQueryString = function (query) {
  var defer = q.defer();
  if (!query || !query.filter) {
    defer.reject({code: constants.httpCodes.badRequest, message: constants.errorMessages.filterQueryNotFound})
  }
  else if (["DAY", "WEEK"].indexOf(query.filter) < 0) {
    defer.reject({code: constants.httpCodes.badRequest, message: constants.errorMessages.invalidFilterType})
  }
  else {
    defer.resolve();
  }
  return defer.promise;
};

module.exports = {
  getInstance: function () {
    if (!_instance) {
      _instance = new InventoryReport();
    }
    return _instance;
  }
};