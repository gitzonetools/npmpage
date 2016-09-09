"use strict";
const plugins = require("./npmpage.plugins");
const paths = require("./npmpage.paths");
exports.run = (configArg) => {
    let done = plugins.q.defer();
    if (configArg.gitbook) {
        plugins.smartfile.fs.copySync('./README.md', './gitbook/index.md');
        plugins.beautylog.log('now compiling gitbook');
        plugins.shelljs.exec(`(cd ./gitbook && node ${paths.gitBookBin} install)`);
        plugins.shelljs.exec(`${paths.gitBookBin} build ${paths.gitbookDir} pages/gitbook/`);
        plugins.beautylog.ok('compiled Gitbook!');
    }
    done.resolve(configArg);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5naXRib29rLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvbnBtcGFnZS5naXRib29rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2Q0FBNEM7QUFDNUMseUNBQXdDO0FBSzdCLFFBQUEsR0FBRyxHQUFHLENBQUMsU0FBeUI7SUFDdkMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUM1QixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDakUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtRQUM5QyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsS0FBSyxDQUFDLFVBQVUsV0FBVyxDQUFDLENBQUE7UUFDMUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxVQUFVLEtBQUssQ0FBQyxVQUFVLGlCQUFpQixDQUFDLENBQUE7UUFDcEYsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==