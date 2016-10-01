"use strict";
const plugins = require("./npmpage.plugins");
const paths = require("./npmpage.paths");
const npmpage_cli_1 = require("./npmpage.cli");
exports.init = (configArg) => {
    let done = plugins.q.defer();
    plugins.smartfile.fs.ensureDirSync(paths.pagesDir);
    if (configArg.coverage) {
        plugins.smartfile.fs.copySync(paths.coverageDir, plugins.path.join(paths.pagesDir, 'coverage'));
    }
    ;
    if (npmpage_cli_1.npmpageCli.argv.host === 'gitlab') {
        plugins.beautylog.ok('Specified host is GitLab! Thus copying pages/ to public/');
        plugins.smartfile.fs.copySync('./pages', './public');
    }
    else {
        plugins.beautylog.warn('no host specified');
    }
    done.resolve(configArg);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5wdWJsaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9ucG1wYWdlLnB1YmxpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNkNBQTRDO0FBQzVDLHlDQUF3QztBQUV4QywrQ0FBMEM7QUFJL0IsUUFBQSxJQUFJLEdBQUcsQ0FBQyxTQUF5QjtJQUN4QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQzVCLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDbEQsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDckIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUN6QixLQUFLLENBQUMsV0FBVyxFQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFDLFVBQVUsQ0FBQyxDQUMvQyxDQUFBO0lBQ0wsQ0FBQztJQUFBLENBQUM7SUFDRixFQUFFLENBQUMsQ0FBQyx3QkFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQywwREFBMEQsQ0FBQyxDQUFBO1FBQ2hGLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUMsVUFBVSxDQUFDLENBQUE7SUFDdkQsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==