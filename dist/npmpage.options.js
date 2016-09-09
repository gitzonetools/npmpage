"use strict";
const plugins = require('./npmpage.plugins');
const paths = require('./npmpage.paths');
exports.init = () => {
    let done = plugins.q.defer();
    let folderArray = plugins.smartfile.fs.listFoldersSync(paths.cwd);
    let npmpageConfig = {
        coverage: false,
        docs: false,
        gitbook: false
    };
    if (folderArray.indexOf('docs') !== -1) {
        plugins.beautylog.ok('found docs');
        npmpageConfig.docs = true;
    }
    if (folderArray.indexOf('coverage') !== -1) {
        plugins.beautylog.ok('found coverage data');
        npmpageConfig.coverage = true;
    }
    if (folderArray.indexOf('gitbook') !== -1) {
        plugins.beautylog.ok('found gitbook');
        npmpageConfig.gitbook = true;
    }
    done.resolve(npmpageConfig);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5vcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvbnBtcGFnZS5vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFZLE9BQU8sV0FBTSxtQkFDekIsQ0FBQyxDQUQyQztBQUM1QyxNQUFZLEtBQUssV0FBTSxpQkFFdkIsQ0FBQyxDQUZ1QztBQVE3QixZQUFJLEdBQUc7SUFDZCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBa0IsQ0FBQTtJQUM1QyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRWpFLElBQUksYUFBYSxHQUFtQjtRQUNoQyxRQUFRLEVBQUUsS0FBSztRQUNmLElBQUksRUFBRSxLQUFLO1FBQ1gsT0FBTyxFQUFFLEtBQUs7S0FDakIsQ0FBQztJQUVGLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ2xDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBQzdCLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBQzNDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO0lBQ2pDLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUNyQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtJQUNoQyxDQUFDO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==