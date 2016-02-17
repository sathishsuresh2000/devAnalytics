var _ = require("lodash");

var dataAccess = require("../../dataAccess").getInstance();
var _instance;

var InventoryReportService = function () {
};

InventoryReportService.prototype.getReport = function (filterType) {
  var query = 'SELECT EXTRACT(' + filterType + ' FROM IDATE) AS "date" , sum(on_hand_value) FROM inventory group by EXTRACT(' + filterType + ' FROM IDATE)';
  return dataAccess.executeQuery(query);
};

module.exports = {
  getInstance: function () {
    if (!_instance) {
      _instance = new InventoryReportService();
    }
    return _instance;
  }
};