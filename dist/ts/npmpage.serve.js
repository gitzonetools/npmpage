"use strict";
const plugins = require("./npmpage.plugins");
const paths = require("./npmpage.paths");
exports.run = (configArg) => {
    let done = plugins.q.defer();
    if (true) {
        exports.npmpageSmartbrowser = new plugins.smartbrowser.Smartbrowser({
            webroot: paths.pagesDir,
            watchFiles: [paths.pagesDir]
        });
        exports.npmpageSmartbrowser.start();
        done.resolve();
    }
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5zZXJ2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3RzL25wbXBhZ2Uuc2VydmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDZDQUE0QztBQUM1Qyx5Q0FBd0M7QUFLN0IsUUFBQSxHQUFHLEdBQUcsQ0FBQyxTQUF5QjtJQUN2QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQzVCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDUCwyQkFBbUIsR0FBRyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDO1lBQ3hELE9BQU8sRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN2QixVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1NBQy9CLENBQUMsQ0FBQTtRQUNGLDJCQUFtQixDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNsQixDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDdkIsQ0FBQyxDQUFBIn0=