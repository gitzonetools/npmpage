"use strict";
const plugins = require("./npmpage.plugins");
const paths = require("./npmpage.paths");
const lik_1 = require("lik");
let docSmartpug; // will be initialized in run()
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
        this.menu.writeToDisk(paths.docsOutputDir);
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
                content: docItem.html
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
        this.html = docSmartpug.getHtmlForData({
            title: 'standard',
            content: plugins.marked(this.markdown)
        });
    }
}
exports.Doc = Doc;
exports.run = (configArg) => {
    let done = plugins.q.defer();
    if (configArg.docs) {
        plugins.smartfile.fs.copySync('./README.md', './docs/index.md'); // makes sure main README is consistent
        docSmartpug = new plugins.smartpug.Smartpug({
            filePath: plugins.path.join(paths.packageDir, 'pug/docs.pug')
        });
        plugins.smartfile.memory.toFs(docSmartpug.getHtmlForData({}), plugins.path.join(paths.pagesDir, 'index.html'));
        let docsBinder = new Binder(paths.docsDir);
        docsBinder.writeToDisk();
    }
    done.resolve(configArg);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtcGFnZS5kb2NzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHMvbnBtcGFnZS5kb2NzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2Q0FBNEM7QUFDNUMseUNBQXdDO0FBQ3hDLDZCQUErQjtBQU0vQixJQUFJLFdBQXNDLENBQUEsQ0FBQywrQkFBK0I7QUFFMUU7O0dBRUc7QUFDSDtJQUlJLFlBQVksVUFBa0I7UUFGOUIsYUFBUSxHQUFVLEVBQUUsQ0FBQTtRQUNwQixTQUFJLEdBQVMsSUFBSSxDQUFBO1FBRWIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUE7UUFDekIsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNyRSxHQUFHLENBQUMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQTtZQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDMUQsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDdEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0NBQ0o7QUFyQkQsd0JBcUJDO0FBSUQ7O0dBRUc7QUFDSDtJQUdJLFlBQVksV0FBa0I7UUFEOUIsc0JBQWlC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