import * as plugins from './npmpage.plugins'
import * as paths from './npmpage.paths'

import { INpmpageConfig } from './npmpage.options'

export let run = (configArg: INpmpageConfig) => {
    let done = plugins.q.defer()
    plugins.tsn.compileGlobStringObject(
        {
            [plugins.path.join(paths.packageDir, 'angular/**/*.ts')]: plugins.path.join(paths.pagesDir, 'app')
        }
    ).then(() => {
        done.resolve(configArg)
    })
    return done.promise
}
