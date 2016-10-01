"use strict";
const plugins = require("./npmpage.plugins");
// pipe stops
const npmpageAngular = require("./npmpage.angular");
const npmpageDocs = require("./npmpage.docs");
const npmpageOptions = require("./npmpage.options");
const npmpagePublic = require("./npmpage.public");
const npmpageServe = require("./npmpage.serve");
exports.run = (argvArg) => {
    let done = plugins.q.defer();
    npmpageOptions.init(argvArg)
        .then(npmpageDocs.run)
        .then(npmpageAngular.run)
        .then(npmpagePublic.init)
        .then(npmpageServe.run)
        .then(() => {
        done.resolve();
    })
        .catch((err) => {
        console.log(err);
    });
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5wcm9taXNlY2hhaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9ucG1wYWdlLnByb21pc2VjaGFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNkNBQTRDO0FBRTVDLGFBQWE7QUFDYixvREFBbUQ7QUFDbkQsOENBQTZDO0FBQzdDLG9EQUFtRDtBQUNuRCxrREFBaUQ7QUFDakQsZ0RBQStDO0FBRXBDLFFBQUEsR0FBRyxHQUFHLENBQUMsT0FBTztJQUNyQixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQzVCLGNBQWMsQ0FBQyxJQUFJLENBQUUsT0FBTyxDQUFFO1NBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO1NBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO1NBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1NBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDO1NBQ3RCLElBQUksQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNsQixDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsQ0FBQyxHQUFHO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNwQixDQUFDLENBQUMsQ0FBQTtJQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQSJ9