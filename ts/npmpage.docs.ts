import * as plugins from './npmpage.plugins'
import * as paths from './npmpage.paths'

// interface
import { INpmpageConfig } from './npmpage.options'

let docSmartpug: plugins.smartpug.Smartpug // will be initialized in run()

class Doc {
    name: string
    private markdown: string
    private html: string
    constructor(filePathArg: string) {
        this.name = plugins.path.parse(filePathArg).name
        this.markdown = plugins.smartfile.fs.toStringSync(filePathArg)
        this.html = docSmartpug.getHtmlForData({
            title: 'standard',
            content: plugins.marked(this.markdown)
        })
    }

    /**
     * writes the Doc to disk
     */
    writeToDisk(){

    }
}

export let run = (configArg: INpmpageConfig) => {
    let done = plugins.q.defer()
    if (configArg.docs) {
        plugins.smartfile.fs.copySync('./README.md','./docs/index.md') // makes sure main README is consistent
        docSmartpug = new plugins.smartpug.Smartpug({
            filePath: plugins.path.join(paths.cwd, 'pug/docs.pug')
        })
        plugins.beautylog.log('now compiling docs')
        let filesPathArray = plugins.smartfile.fs.listFilesSync(paths.docsDir)
        for (let filePath in filesPathArray) {
            let localDoc = new Doc(filePath)
            localDoc.writeToDisk()
        }
        plugins.beautylog.ok('compiled Docs!')
    }
    done.resolve(configArg)
    return done.promise
}
