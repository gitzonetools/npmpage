import * as paths from '../npmpage.paths'
import * as plugins from './mod.plugins'

import { INpmpageConfig } from '../npmpage.options'

export let npmpageSmartbrowser: plugins.smartbrowser.Smartbrowser

export let run = (configArg: INpmpageConfig) => {
    let done = plugins.q.defer()
    if (configArg.serve) {
        plugins.beautylog.info(`serving created docs now!`)
        npmpageSmartbrowser = new plugins.smartbrowser.Smartbrowser({
            webroot: paths.pagesDir,
            watchFiles: [paths.pagesDir]
        })
        npmpageSmartbrowser.start()
        done.resolve()
    } else {
        plugins.beautylog.log(`Not serving, since you didn't ask for it`)
    }
    return done.promise
}
