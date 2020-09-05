var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {
  res.set(
    "Cache-Control",
    "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
  );
  next();
});
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));
/*
const { period } = require("./models");
period.findAll().then((result) => {
  console.log(result);
});
*/
var Users = require("./routes/Users");
var Landing = require("./routes/Landing");
app.use("/users", Users);
app.use("/", Landing);

app.listen(port, function () {
  console.log("Server is running on port: " + port);
});
