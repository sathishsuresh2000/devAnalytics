"use strict";

var express = require("express"),
  router = express.Router();
var inventoryReportRouter = require("./inventoryReportRoute");

router.get("/", function (req, res) {
  res.sendFile('public/index.html');
});

router.use("/report", inventoryReportRouter);

module.exports = router;