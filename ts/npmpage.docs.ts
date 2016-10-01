import * as plugins from './npmpage.plugins'
import * as paths from './npmpage.paths'
import { Objectmap } from 'lik'

// interface
import { INpmpageConfig } from './npmpage.options'
import { IMenuItemObject } from '../angular/app.interfaces'

let docSmartpug: plugins.smartpug.Smartpug // will be initialized in run()

/**
 * class Binder 
 */
export class Binder {
    baseDir: string
    docArray: Doc[] = []
    menu: Menu = null
    constructor(dirPathArg: string) {
        this.baseDir = dirPathArg
        let filesPathArray = plugins.smartfile.fs.listFilesSync(this.baseDir)
        for (let filePath of filesPathArray) {
            let resolvedPath = plugins.path.resolve('./docs/' + filePath)
            this.docArray.push(new Doc(resolvedPath,this.baseDir))
        }
        this.menu = new Menu(this.docArray)
        this.menu.update()
    }

    /**
     * writes the binder to disk
     */
    writeToDisk() {
        this.menu.writeToDisk(paths.docsOutputDir)
    }
}



/**
 * class Menu
 */
export class Menu {
    docArray: Doc[]
    menuItemObjectmap = new Objectmap<IMenuItemObject>()
    constructor(docArrayArg: Doc[]) {
        this.docArray = docArrayArg
        this.update()
    }

    /**
     * updates the menu
     */
    update() {
        this.menuItemObjectmap.wipe() // make sure objectmap is empty
        for (let docItem of this.docArray) {
            this.menuItemObjectmap.add({
                title: docItem.name,
                relPath: plugins.path.relative(docItem.baseDir, docItem.filePath),
                content: docItem.html
            })
        }
    }

    /**
     * write to disk
     */
    writeToDisk(filePathArg) {
        let menuObject = {
            menuItems: this.menuItemObjectmap.getArray()
        }
        plugins.smartfile.memory.toFsSync(JSON.stringify(menuObject),plugins.path.join(filePathArg, 'menu.json'))
    }
}

/**
 * class Doc 
 */
export class Doc {
    name: string
    filePath: string
    baseDir: string
    markdown: string
    html: string
    constructor(filePathArg: string,baseDirArg: string) {
        this.filePath = filePathArg
        this.baseDir = baseDirArg
        this.name = plugins.path.parse(filePathArg).name
        this.markdown = plugins.smartfile.fs.toStringSync(filePathArg)
        this.html = docSmartpug.getHtmlForData({
            title: 'standard',
            content: plugins.marked(this.markdown)
        })
    }
}

export let run = (configArg: INpmpageConfig) => {
    let done = plugins.q.defer()
    if (configArg.docs) {
        plugins.smartfile.fs.copySync('./README.md','./docs/index.md') // makes sure main README is consistent
        docSmartpug = new plugins.smartpug.Smartpug({
            filePath: plugins.path.join(paths.packageDir, 'pug/docs.pug')
        })
        plugins.smartfile.memory.toFs(docSmartpug.getHtmlForData({}), plugins.path.join(paths.pagesDir, 'index.html'))
        let docsBinder = new Binder(paths.docsDir)
        docsBinder.writeToDisk()
    }
    done.resolve(configArg)
    return done.promise
}
