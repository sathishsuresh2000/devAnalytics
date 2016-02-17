var express = require("express"),
  app = express(),
  bodyParser = require('body-parser'),
  http = require("http"),
  path=require("path");

var routes = require("./routes"),
  config = require("./config.json");
var server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/", routes);
app.use(express.static(path.join(__dirname, 'public')));

server.listen(config.nodeServer.port, function () {
  console.log("Server listening at Port:", config.nodeServer.port);
});





