"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
var data_js_1 = require("./data.js");
var app = (0, express_1.default)();
var port = 3000;
// Serve static files from the "dist" directory
app.use(express_1.default.static(path_1.default.join(__dirname, '../dist')));
app.get('/', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../dist', 'index.html'));
});
app.listen(port, function () {
    console.log("Server is running at http://localhost:".concat(port));
});
console.log("hello world!");
//console.log(PlaylistData);
var items = [];
for (var _i = 0, PlaylistData_1 = data_js_1.default; _i < PlaylistData_1.length; _i++) {
    var obj = PlaylistData_1[_i];
    //console.log(obj);
    items.push(obj);
    //items.push({...JSON.parse(obj)});
}
for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
    var obj = items_1[_a];
    console.log(obj.src);
}
app.get('/media', function (req, res) {
    var imageSrc = items[0].src; // Your logic to get the image URL
    res.json({ src: imageSrc });
});
