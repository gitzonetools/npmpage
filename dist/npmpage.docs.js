"use strict";
const plugins = require("./npmpage.plugins");
const paths = require("./npmpage.paths");
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
        plugins.smartfile.fs.ensureDirSync(dirArgResolved);
        plugins.smartfile.memory.toFsSync(this.html, pathArgJoined);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5kb2NzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvbnBtcGFnZS5kb2NzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2Q0FBNEM7QUFDNUMseUNBQXdDO0FBS3hDLElBQUksV0FBc0MsQ0FBQSxDQUFDLCtCQUErQjtBQUUxRTtJQUlJLFlBQVksV0FBbUI7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUE7UUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDOUQsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsY0FBYyxDQUFDO1lBQ25DLEtBQUssRUFBRSxVQUFVO1lBQ2pCLE9BQU8sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDekMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVyxDQUFDLE9BQWU7UUFDdkIsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDbEQsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUE7UUFDekUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ2xELE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQzlELENBQUM7Q0FDSjtBQUVVLFFBQUEsR0FBRyxHQUFHLENBQUMsU0FBeUI7SUFDdkMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUM1QixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqQixPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFDLGlCQUFpQixDQUFDLENBQUEsQ0FBQyx1Q0FBdUM7UUFDdEcsV0FBVyxHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDeEMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDO1NBQ2hFLENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDM0MsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN0RSxHQUFHLENBQUMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQTtZQUM3RCxJQUFJLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUNwQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUM3QyxDQUFDO1FBQ0QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==