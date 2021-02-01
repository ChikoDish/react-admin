"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _cookieParser = require("cookie-parser");

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

var _errorReporter = require("./errorReporter");

var _errorReporter2 = _interopRequireDefault(_errorReporter);

var _index = require("./routes/index");

var _index2 = _interopRequireDefault(_index);

var _users = require("./routes/users");

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();


var port = process.env.PORT || 5003;

var app = (0, _express2.default)();

app.use((0, _morgan2.default)("dev"));
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());
app.use(_express2.default.static(_path2.default.join(__dirname, "public")));

app.use("/", _index2.default);
app.use("/users", _users2.default);

app.listen(port);
console.log("app is running on " + port);
exports.default = app;