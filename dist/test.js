"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArraySlice = require("./index.js");
var a = [4, 7, 3, 6, 1, 2, 8, 5];
var b = new ArraySlice(a, 0, -2);
console.log(b.sort(function (a, b) { return a < b; }));
console.log(b.sort(function (a, b) { return a > b; }));
console.log(b.sort(function (a, b) { return a >> 1 < b; }));
console.log(b.mutmap(function (x) { return x >> 1; }));
