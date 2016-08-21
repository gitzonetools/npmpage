"use strict";
const plugins = require("./npmpage.plugins");
const npmpageOptions = require("./npmpage.options");
exports.run = () => {
    let done = plugins.q.defer();
    npmpageOptions.init();
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5wcm9taXNlY2hhaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9ucG1wYWdlLnByb21pc2VjaGFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBWSxPQUFPLFdBQU0sbUJBQW1CLENBQUMsQ0FBQTtBQUM3QyxNQUFZLGNBQWMsV0FBTSxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3pDLFdBQUcsR0FBRztJQUNiLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hCLENBQUMsQ0FBQSJ9