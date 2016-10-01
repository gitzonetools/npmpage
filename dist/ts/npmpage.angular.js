"use strict";
const plugins = require("./npmpage.plugins");
const paths = require("./npmpage.paths");
exports.run = (configArg) => {
    let done = plugins.q.defer();
    plugins.tsn.compileGlobStringObject({
        [plugins.path.join(paths.packageDir, 'angular/**/*.ts')]: plugins.path.join(paths.pagesDir, 'app')
    }).then(() => {
        done.resolve(configArg);
    });
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5hbmd1bGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvbnBtcGFnZS5hbmd1bGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2Q0FBNEM7QUFDNUMseUNBQXdDO0FBSTdCLFFBQUEsR0FBRyxHQUFHLENBQUMsU0FBeUI7SUFDdkMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUMvQjtRQUNJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7S0FDckcsQ0FDSixDQUFDLElBQUksQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDM0IsQ0FBQyxDQUFDLENBQUE7SUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==