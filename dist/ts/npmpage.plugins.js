"use strict";
require("typings-global");
exports.beautylog = require("beautylog");
exports.lik = require("lik");
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
exports.projectinfo = require("projectinfo");
exports.shelljs = require("shelljs");
exports.smartcli = require("smartcli");
exports.smartfile = require("smartfile");
exports.smartbrowser = require("smartbrowser");
exports.smartpug = require("smartpug");
exports.tsn = require("tsn");
exports.q = require("q");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5wbHVnaW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvbnBtcGFnZS5wbHVnaW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQkFBdUI7QUFDdkIseUNBQThDO0FBQzlDLDZCQUFrQztBQUNsQyxtQ0FBd0M7QUFDeEMsY0FBTSxDQUFDLFVBQVUsQ0FBQztJQUNoQixRQUFRLEVBQUUsSUFBSSxjQUFNLENBQUMsUUFBUSxFQUFFO0lBQy9CLEdBQUcsRUFBRSxJQUFJO0lBQ1QsTUFBTSxFQUFFLElBQUk7SUFDWixNQUFNLEVBQUUsS0FBSztJQUNiLFFBQVEsRUFBRSxLQUFLO0lBQ2YsUUFBUSxFQUFFLElBQUk7SUFDZCxVQUFVLEVBQUUsSUFBSTtJQUNoQixXQUFXLEVBQUUsS0FBSztDQUNuQixDQUFDLENBQUE7QUFDRiwrQkFBb0M7QUFDcEMsNkNBQWtEO0FBQ2xELHFDQUEwQztBQUMxQyx1Q0FBNEM7QUFDNUMseUNBQThDO0FBQzlDLCtDQUFvRDtBQUNwRCx1Q0FBNEM7QUFDNUMsNkJBQWtDO0FBQ2xDLHlCQUE4QiJ9