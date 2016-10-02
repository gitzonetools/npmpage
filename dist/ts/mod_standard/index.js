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
        .then(() => {
        done.resolve();
    })
        .catch((err) => {
        console.log(err);
    });
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90cy9tb2Rfc3RhbmRhcmQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUF3QztBQUt4QywwQ0FBeUM7QUFDekMsd0NBQXVDO0FBQ3ZDLHNDQUFxQztBQUNyQyx3Q0FBdUM7QUFHNUIsUUFBQSxHQUFHLEdBQUcsQ0FBQyxTQUF5QjtJQUN2QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBRTVCLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO1NBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1NBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1NBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1NBQ2xCLElBQUksQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNsQixDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsQ0FBQyxHQUFHO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNwQixDQUFDLENBQUMsQ0FBQTtJQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQSJ9