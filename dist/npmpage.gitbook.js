"use strict";
const plugins = require("./npmpage.plugins");
const paths = require("./npmpage.paths");
exports.run = (configArg) => {
    let done = plugins.q.defer();
    if (configArg.docs) {
        plugins.beautylog.log("now compiling gitbook");
        plugins.shelljs.exec(`(cd ./docs && node ${paths.gitBookBin} install)`);
        plugins.shelljs.exec(`${paths.gitBookBin} build docs/ pages/docs/`);
        plugins.beautylog.ok("compiled Gitbook!");
        plugins.smartfile.fs.copySync("./docs/index.md", "README.md");
        plugins.beautylog.ok("updated README.md");
    }
    done.resolve(configArg);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5naXRib29rLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvbnBtcGFnZS5naXRib29rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFZLE9BQU8sV0FBTSxtQkFBbUIsQ0FBQyxDQUFBO0FBQzdDLE1BQVksS0FBSyxXQUFNLGlCQUFpQixDQUFDLENBQUE7QUFLOUIsV0FBRyxHQUFHLENBQUMsU0FBeUI7SUFDdkMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqQixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHNCQUFzQixLQUFLLENBQUMsVUFBVSxXQUFXLENBQUMsQ0FBQztRQUN4RSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxVQUFVLDBCQUEwQixDQUFDLENBQUM7UUFDcEUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN4QixDQUFDLENBQUEifQ==