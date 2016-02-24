"use strict";

var express = require("express"),
  router = express.Router(),
  path=require("path");

var inventoryReportRouter = require("./inventoryReportRoute");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname,'../public/index.html'));
});

router.use("/report", inventoryReportRouter);

module.exports = router;