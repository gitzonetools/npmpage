"use strict";
require("typings-global");
exports.beautylog = require("beautylog");
exports.marked = require("marked");
exports.marked.setOptions({
    renderer: new exports.marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});
exports.path = require("path");
exports.smartcli = require("smartcli");
exports.smartfile = require("smartfile");
exports.shelljs = require("shelljs");
exports.smartpug = require("smartpug");
exports.q = require("q");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5wbHVnaW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvbnBtcGFnZS5wbHVnaW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQkFBdUI7QUFDdkIseUNBQThDO0FBQzlDLG1DQUF3QztBQUN4QyxjQUFNLENBQUMsVUFBVSxDQUFDO0lBQ2hCLFFBQVEsRUFBRSxJQUFJLGNBQU0sQ0FBQyxRQUFRLEVBQUU7SUFDL0IsR0FBRyxFQUFFLElBQUk7SUFDVCxNQUFNLEVBQUUsSUFBSTtJQUNaLE1BQU0sRUFBRSxLQUFLO0lBQ2IsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsSUFBSTtJQUNkLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLFdBQVcsRUFBRSxLQUFLO0NBQ25CLENBQUMsQ0FBQTtBQUNGLCtCQUFvQztBQUNwQyx1Q0FBNEM7QUFDNUMseUNBQThDO0FBQzlDLHFDQUEwQztBQUMxQyx1Q0FBNEM7QUFDNUMseUJBQThCIn0=