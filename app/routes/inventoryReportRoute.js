"use strict";

var express = require("express"),
  inventoryReportRouter = express.Router();

var inventoryReportController = require("../controllers/inventoryReport").getInstance();

inventoryReportRouter.get("/",inventoryReportController.getReport);


module.exports = inventoryReportRouter;