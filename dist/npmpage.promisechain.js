"use strict";
const plugins = require('./npmpage.plugins');
const npmpageDocs = require('./npmpage.docs');
const npmpageOptions = require('./npmpage.options');
const npmpageGitbook = require('./npmpage.gitbook');
const npmpagePublic = require('./npmpage.public');
exports.run = () => {
    let done = plugins.q.defer();
    npmpageOptions.init()
        .then(npmpageDocs.run)
        .then(npmpageGitbook.run)
        .then(npmpagePublic.init)
        .then(() => {
        done.resolve();
    })
        .catch((err) => {
        console.log(err);
    });
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5wcm9taXNlY2hhaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9ucG1wYWdlLnByb21pc2VjaGFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBWSxPQUFPLFdBQU0sbUJBQ3pCLENBQUMsQ0FEMkM7QUFDNUMsTUFBWSxXQUFXLFdBQU0sZ0JBQzdCLENBQUMsQ0FENEM7QUFDN0MsTUFBWSxjQUFjLFdBQU0sbUJBQ2hDLENBQUMsQ0FEa0Q7QUFDbkQsTUFBWSxjQUFjLFdBQU0sbUJBQ2hDLENBQUMsQ0FEa0Q7QUFDbkQsTUFBWSxhQUFhLFdBQU0sa0JBQy9CLENBQUMsQ0FEZ0Q7QUFDdEMsV0FBRyxHQUFHO0lBQ2IsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUM1QixjQUFjLENBQUMsSUFBSSxFQUFFO1NBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO1NBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO1NBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1NBQ3hCLElBQUksQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNsQixDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsQ0FBQyxHQUFHO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNwQixDQUFDLENBQUMsQ0FBQTtJQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQSJ9