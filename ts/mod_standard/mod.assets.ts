import * as q from 'q'
import * as paths from '../npmpage.paths'
import * as plugins from './mod.plugins'

import { INpmpageConfig } from '../npmpage.options'

export let run = (configArg: INpmpageConfig) => {
    let done = q.defer()
    plugins.smartfile.fs.copySync(
        paths.webJsBundleFile,
        plugins.path.join(paths.pagesDir, 'build.js')
    )
    done.resolve(configArg)
    return done.promise
}
