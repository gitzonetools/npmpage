"use strict";
const plugins = require("./npmpage.plugins");
const paths = require("./npmpage.paths");
exports.init = (argvArg) => {
    let done = plugins.q.defer();
    let folderArray = plugins.smartfile.fs.listFoldersSync(paths.cwd);
    let npmpageConfig = {
        coverage: false,
        docs: false,
        serve: false
    };
    if (argvArg.serve) {
        npmpageConfig.serve = true;
    }
    if (folderArray.indexOf('docs') !== -1) {
        plugins.beautylog.ok('found docs');
        npmpageConfig.docs = true;
    }
    if (folderArray.indexOf('coverage') !== -1) {
        plugins.beautylog.ok('found coverage data');
        npmpageConfig.coverage = true;
    }
    done.resolve(npmpageConfig);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5vcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvbnBtcGFnZS5vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2Q0FBNEM7QUFDNUMseUNBQXdDO0FBUTdCLFFBQUEsSUFBSSxHQUFHLENBQUUsT0FBTztJQUN2QixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBa0IsQ0FBQTtJQUM1QyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRWpFLElBQUksYUFBYSxHQUFtQjtRQUNoQyxRQUFRLEVBQUUsS0FBSztRQUNmLElBQUksRUFBRSxLQUFLO1FBQ1gsS0FBSyxFQUFFLEtBQUs7S0FDZixDQUFBO0lBRUQsRUFBRSxDQUFDLENBQUUsT0FBTyxDQUFDLEtBQU0sQ0FBQyxDQUFDLENBQUM7UUFDbEIsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7SUFDOUIsQ0FBQztJQUVELEVBQUUsQ0FBQyxDQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ2xDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBQzdCLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBRSxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBQzNDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO0lBQ2pDLENBQUM7SUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQSJ9