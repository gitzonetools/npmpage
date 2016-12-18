"use strict";
const paths = require("../npmpage.paths");
const plugins = require("./mod.plugins");
exports.run = (configArg) => {
    let done = plugins.q.defer();
    if (configArg.serve) {
        plugins.beautylog.info(`serving created docs now!`);
        exports.npmpageSmartbrowser = new plugins.smartbrowser.Smartbrowser({
            webroot: paths.pagesDir,
            watchFiles: [paths.pagesDir]
        });
        exports.npmpageSmartbrowser.start();
        done.resolve(configArg);
    }
    else {
        plugins.beautylog.log(`Not serving, since you didn't ask for it`);
        done.resolve(configArg);
    }
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLnNlcnZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdHMvbW9kX3N0YW5kYXJkL21vZC5zZXJ2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMENBQXlDO0FBQ3pDLHlDQUF3QztBQU03QixRQUFBLEdBQUcsR0FBRyxDQUFDLFNBQXlCO0lBQ3ZDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDNUIsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtRQUNuRCwyQkFBbUIsR0FBRyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDO1lBQ3hELE9BQU8sRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN2QixVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1NBQy9CLENBQUMsQ0FBQTtRQUNGLDJCQUFtQixDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQTtRQUNqRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzNCLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==