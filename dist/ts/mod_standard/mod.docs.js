"use strict";
const lik_1 = require("lik");
const paths = require("../npmpage.paths");
const plugins = require("./mod.plugins");
let docSmartpug; // will be initialized in run()
let config;
/**
 * class Binder
 */
class Binder {
    constructor(dirPathArg) {
        this.docArray = [];
        this.menu = null;
        this.baseDir = dirPathArg;
        let filesPathArray = plugins.smartfile.fs.listFilesSync(this.baseDir);
        for (let filePath of filesPathArray) {
            let resolvedPath = plugins.path.resolve('./docs/' + filePath);
            this.docArray.push(new Doc(resolvedPath, this.baseDir));
        }
        this.menu = new Menu(this.docArray);
        this.menu.update();
    }
    /**
     * writes the binder to disk
     */
    writeToDisk() {
        this.menu.writeToDisk(paths.pagesDir);
    }
}
exports.Binder = Binder;
/**
 * class Menu
 */
class Menu {
    constructor(docArrayArg) {
        this.menuItemObjectmap = new lik_1.Objectmap();
        this.docArray = docArrayArg;
        this.update();
    }
    /**
     * updates the menu
     */
    update() {
        this.menuItemObjectmap.wipe(); // make sure objectmap is empty
        for (let docItem of this.docArray) {
            this.menuItemObjectmap.add({
                title: docItem.name,
                relPath: plugins.path.relative(docItem.baseDir, docItem.filePath),
                content: docItem.html,
                project: {
                    name: config.projectinfo.npm.name
                }
            });
        }
    }
    /**
     * write to disk
     */
    writeToDisk(filePathArg) {
        let menuObject = {
            menuItems: this.menuItemObjectmap.getArray()
        };
        plugins.smartfile.memory.toFsSync(JSON.stringify(menuObject), plugins.path.join(filePathArg, 'menu.json'));
    }
}
exports.Menu = Menu;
/**
 * class Doc
 */
class Doc {
    constructor(filePathArg, baseDirArg) {
        this.filePath = filePathArg;
        this.baseDir = baseDirArg;
        this.name = plugins.path.parse(filePathArg).name;
        this.markdown = plugins.smartfile.fs.toStringSync(filePathArg);
        this.html = plugins.marked(this.markdown);
    }
}
exports.Doc = Doc;
exports.run = (configArg) => {
    let done = plugins.q.defer();
    config = configArg;
    if (configArg.docs) {
        plugins.smartfile.fs.ensureDirSync(paths.pagesDir);
        plugins.smartfile.fs.copySync('./README.md', './docs/index.md'); // makes sure main README is consistent
        docSmartpug = new plugins.smartpug.Smartpug({
            filePath: plugins.path.join(paths.packageDir, 'pug/docs.pug')
        });
        plugins.smartfile.memory.toFsSync(docSmartpug.getHtmlForData({}), plugins.path.join(paths.pagesDir, 'index.html'));
        let docsBinder = new Binder(paths.docsDir);
        docsBinder.writeToDisk();
    }
    done.resolve(configArg);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLmRvY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90cy9tb2Rfc3RhbmRhcmQvbW9kLmRvY3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDZCQUErQjtBQUMvQiwwQ0FBeUM7QUFFekMseUNBQXdDO0FBTXhDLElBQUksV0FBc0MsQ0FBQSxDQUFDLCtCQUErQjtBQUMxRSxJQUFJLE1BQXNCLENBQUE7QUFFMUI7O0dBRUc7QUFDSDtJQUlJLFlBQVksVUFBa0I7UUFGOUIsYUFBUSxHQUFVLEVBQUUsQ0FBQTtRQUNwQixTQUFJLEdBQVMsSUFBSSxDQUFBO1FBRWIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUE7UUFDekIsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNyRSxHQUFHLENBQUMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQTtZQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDMUQsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDdEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0NBQ0o7QUFyQkQsd0JBcUJDO0FBRUQ7O0dBRUc7QUFDSDtJQUdJLFlBQVksV0FBa0I7UUFEOUIsc0JBQWlCLEdBQUcsSUFBSSxlQUFTLEVBQW1CLENBQUE7UUFFaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUE7UUFDM0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ2pCLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU07UUFDRixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUEsQ0FBQywrQkFBK0I7UUFDN0QsR0FBRyxDQUFDLENBQUMsSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztnQkFDdkIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJO2dCQUNuQixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDO2dCQUNqRSxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7Z0JBQ3JCLE9BQU8sRUFBRTtvQkFDTCxJQUFJLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSTtpQkFDcEM7YUFDSixDQUFDLENBQUE7UUFDTixDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVyxDQUFDLFdBQVc7UUFDbkIsSUFBSSxVQUFVLEdBQUc7WUFDYixTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRTtTQUMvQyxDQUFBO1FBQ0QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUE7SUFDN0csQ0FBQztDQUNKO0FBbENELG9CQWtDQztBQUVEOztHQUVHO0FBQ0g7SUFNSSxZQUFZLFdBQW1CLEVBQUMsVUFBa0I7UUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUE7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUE7UUFDaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDOUQsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0NBQ0o7QUFiRCxrQkFhQztBQUVVLFFBQUEsR0FBRyxHQUFHLENBQUMsU0FBeUI7SUFDdkMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUM1QixNQUFNLEdBQUcsU0FBUyxDQUFBO0lBQ2xCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDbEQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBQyxpQkFBaUIsQ0FBQyxDQUFBLENBQUMsdUNBQXVDO1FBQ3RHLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ3hDLFFBQVEsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQztTQUNoRSxDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQzdCLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQ2xELENBQUE7UUFDRCxJQUFJLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDMUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQSJ9