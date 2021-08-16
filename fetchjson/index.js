"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "http://jsonplaceholder.typicode.com/todos/1";
var response = axios_1["default"].get(url);
response.then(function (res) {
    console.log(res.data);
});
