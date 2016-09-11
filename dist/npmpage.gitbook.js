"use strict";
const plugins = require('./npmpage.plugins');
const paths = require('./npmpage.paths');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5naXRib29rLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvbnBtcGFnZS5naXRib29rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFZLE9BQU8sV0FBTSxtQkFDekIsQ0FBQyxDQUQyQztBQUM1QyxNQUFZLEtBQUssV0FBTSxpQkFHdkIsQ0FBQyxDQUh1QztBQUs3QixXQUFHLEdBQUcsQ0FBQyxTQUF5QjtJQUN2QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQzVCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUMsb0JBQW9CLENBQUMsQ0FBQTtRQUNqRSxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1FBQzlDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHlCQUF5QixLQUFLLENBQUMsVUFBVSxXQUFXLENBQUMsQ0FBQTtRQUMxRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxVQUFVLFVBQVUsS0FBSyxDQUFDLFVBQVUsaUJBQWlCLENBQUMsQ0FBQTtRQUNwRixPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQSJ9