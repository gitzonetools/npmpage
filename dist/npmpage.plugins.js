"use strict";
require('typings-global');
exports.beautylog = require('beautylog');
exports.marked = require('marked');
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
exports.path = require('path');
exports.smartcli = require('smartcli');
exports.smartfile = require('smartfile');
exports.shelljs = require('shelljs');
exports.smartpug = require('smartpug');
exports.q = require('q');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5wbHVnaW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvbnBtcGFnZS5wbHVnaW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFPLGdCQUNQLENBQUMsQ0FEc0I7QUFDVCxpQkFBUyxXQUFXLFdBQVcsQ0FBQyxDQUFBO0FBQ2hDLGNBQU0sV0FBVyxRQUFRLENBQUMsQ0FBQTtBQUN4QyxjQUFNLENBQUMsVUFBVSxDQUFDO0lBQ2hCLFFBQVEsRUFBRSxJQUFJLGNBQU0sQ0FBQyxRQUFRLEVBQUU7SUFDL0IsR0FBRyxFQUFFLElBQUk7SUFDVCxNQUFNLEVBQUUsSUFBSTtJQUNaLE1BQU0sRUFBRSxLQUFLO0lBQ2IsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsSUFBSTtJQUNkLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLFdBQVcsRUFBRSxLQUFLO0NBQ25CLENBQUMsQ0FBQTtBQUNZLFlBQUksV0FBVyxNQUFNLENBQUMsQ0FBQTtBQUN0QixnQkFBUSxXQUFXLFVBQVUsQ0FBQyxDQUFBO0FBQzlCLGlCQUFTLFdBQVcsV0FBVyxDQUFDLENBQUE7QUFDaEMsZUFBTyxXQUFXLFNBQVMsQ0FBQyxDQUFBO0FBQzVCLGdCQUFRLFdBQVcsVUFBVSxDQUFDLENBQUE7QUFDOUIsU0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFBIn0=