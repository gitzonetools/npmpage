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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5kb2NzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvbnBtcGFnZS5kb2NzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFZLE9BQU8sV0FBTSxtQkFDekIsQ0FBQyxDQUQyQztBQUM1QyxNQUFZLEtBQUssV0FBTSxpQkFHdkIsQ0FBQyxDQUh1QztBQUt4QyxJQUFJLFdBQXNDLENBQUEsQ0FBQywrQkFBK0I7QUFFMUU7SUFJSSxZQUFZLFdBQW1CO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFBO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzlELElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQztZQUNuQyxLQUFLLEVBQUUsVUFBVTtZQUNqQixPQUFPLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3pDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVcsQ0FBQyxPQUFlO1FBQ3ZCLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2xELElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFBO1FBQ3pFLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUNsRCxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxhQUFhLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0FBQ0wsQ0FBQztBQUVVLFdBQUcsR0FBRyxDQUFDLFNBQXlCO0lBQ3ZDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDNUIsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDakIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBQyxpQkFBaUIsQ0FBQyxDQUFBLENBQUMsdUNBQXVDO1FBQ3RHLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ3hDLFFBQVEsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQztTQUNoRSxDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQzNDLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDdEUsR0FBRyxDQUFDLENBQUMsSUFBSSxRQUFRLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUE7WUFDN0QsSUFBSSxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDcEMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDN0MsQ0FBQztRQUNELE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUNELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDdkIsQ0FBQyxDQUFBIn0=