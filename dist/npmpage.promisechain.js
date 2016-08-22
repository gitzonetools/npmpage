"use strict";
const plugins = require("./npmpage.plugins");
const npmpageOptions = require("./npmpage.options");
const npmpagePublic = require("./npmpage.public");
exports.run = () => {
    let done = plugins.q.defer();
    npmpageOptions.init()
        .then(npmpagePublic.init)
        .then(() => {
        done.resolve();
    });
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5wcm9taXNlY2hhaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9ucG1wYWdlLnByb21pc2VjaGFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBWSxPQUFPLFdBQU0sbUJBQW1CLENBQUMsQ0FBQTtBQUM3QyxNQUFZLGNBQWMsV0FBTSxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3BELE1BQVksYUFBYSxXQUFNLGtCQUFrQixDQUFDLENBQUE7QUFDdkMsV0FBRyxHQUFHO0lBQ2IsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixjQUFjLENBQUMsSUFBSSxFQUFFO1NBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1NBQ3hCLElBQUksQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDLENBQUMsQ0FBQTtJQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hCLENBQUMsQ0FBQSJ9