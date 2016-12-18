"use strict";
const plugins = require("./mod.plugins");
const modAssets = require("./mod.assets");
const modClean = require("./mod.clean");
const modDocs = require("./mod.docs");
const modServe = require("./mod.serve");
exports.run = (configArg) => {
    let done = plugins.q.defer();
    modClean.run(configArg)
        .then(modDocs.run)
        .then(modAssets.run)
        .then(modServe.run)
        .then((configArg) => {
        done.resolve(configArg);
    })
        .catch((err) => {
        console.log(err);
    });
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90cy9tb2Rfc3RhbmRhcmQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUF3QztBQUt4QywwQ0FBeUM7QUFDekMsd0NBQXVDO0FBQ3ZDLHNDQUFxQztBQUNyQyx3Q0FBdUM7QUFFNUIsUUFBQSxHQUFHLEdBQUcsQ0FBQyxTQUF5QjtJQUN2QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBa0IsQ0FBQTtJQUU1QyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztTQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztTQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztTQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztTQUNsQixJQUFJLENBQUMsQ0FBQyxTQUF5QjtRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzNCLENBQUMsQ0FBQztTQUNELEtBQUssQ0FBQyxDQUFDLEdBQUc7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDdkIsQ0FBQyxDQUFBIn0=