"use strict";
const plugins = require('./npmpage.plugins');
const paths = require('./npmpage.paths');
let docSmartpug; // will be initialized in run()
class Doc {
    constructor(filePathArg) {
        this.name = plugins.path.parse(filePathArg).name;
        this.markdown = plugins.smartfile.fs.toStringSync(filePathArg);
        this.html = docSmartpug.getHtmlForData({
            title: 'standard',
            content: plugins.marked(this.markdown)
        });
    }
    /**
     * writes the Doc to disk
     */
    writeToDisk(pathArg) {
        let dirArgResolved = plugins.path.resolve(pathArg);
        let pathArgJoined = plugins.path.join(dirArgResolved, this.name + '.html');
        plugins.smartfile.memory.toFs(this.html, pathArgJoined);
    }
}
exports.run = (configArg) => {
    let done = plugins.q.defer();
    if (configArg.docs) {
        plugins.smartfile.fs.copySync('./README.md', './docs/index.md'); // makes sure main README is consistent
        docSmartpug = new plugins.smartpug.Smartpug({
            filePath: plugins.path.join(paths.packageDir, 'pug/docs.pug')
        });
        plugins.beautylog.log('now compiling docs');
        let filesPathArray = plugins.smartfile.fs.listFilesSync(paths.docsDir);
        for (let filePath of filesPathArray) {
            let resolvedPath = plugins.path.resolve("./docs/" + filePath);
            let localDoc = new Doc(resolvedPath);
            localDoc.writeToDisk(paths.docsOutputDir);
        }
        plugins.beautylog.ok('compiled Docs!');
    }
    done.resolve(configArg);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5kb2NzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvbnBtcGFnZS5kb2NzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFZLE9BQU8sV0FBTSxtQkFDekIsQ0FBQyxDQUQyQztBQUM1QyxNQUFZLEtBQUssV0FBTSxpQkFHdkIsQ0FBQyxDQUh1QztBQUt4QyxJQUFJLFdBQXNDLENBQUEsQ0FBQywrQkFBK0I7QUFFMUU7SUFJSSxZQUFZLFdBQW1CO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFBO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzlELElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQztZQUNuQyxLQUFLLEVBQUUsVUFBVTtZQUNqQixPQUFPLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3pDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVcsQ0FBQyxPQUFlO1FBQ3ZCLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2xELElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFBO1FBQ3pFLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQzFELENBQUM7QUFDTCxDQUFDO0FBRVUsV0FBRyxHQUFHLENBQUMsU0FBeUI7SUFDdkMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUM1QixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqQixPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFDLGlCQUFpQixDQUFDLENBQUEsQ0FBQyx1Q0FBdUM7UUFDdEcsV0FBVyxHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDeEMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDO1NBQ2hFLENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDM0MsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN0RSxHQUFHLENBQUMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQTtZQUM3RCxJQUFJLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUNwQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUM3QyxDQUFDO1FBQ0QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==