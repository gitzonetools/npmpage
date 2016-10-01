import * as plugins from './npmpage.plugins'
import * as paths from './npmpage.paths'
import { INpmpageConfig } from './npmpage.options'

export let npmpageSmartbrowser: plugins.smartbrowser.Smartbrowser

export let run = (configArg: INpmpageConfig) => {
    let done = plugins.q.defer()
    if (configArg.serve) {
        npmpageSmartbrowser = new plugins.smartbrowser.Smartbrowser({
            webroot: paths.pagesDir,
            watchFiles: [paths.pagesDir]
        })
        npmpageSmartbrowser.start()
        done.resolve()
    }
    return done.promise
}
