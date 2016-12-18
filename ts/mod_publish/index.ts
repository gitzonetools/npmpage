import * as q from 'q'
import * as paths from '../npmpage.paths'
import * as plugins from './mod.plugins'

import { INpmpageConfig } from '../npmpage.options'

export let run = (configArg: INpmpageConfig) => {
    let done = q.defer()
    if (configArg.publish) {
        switch (configArg.publishTarget) {
            case 'gitlab':
                plugins.smartfile.fs.copySync(
                    paths.pagesDir,
                    paths.publicDir
                )
                break
            default:
                plugins.beautylog.warn(
                    `publish target "${configArg.publishTarget}" unknown`
                )
                break
        }
    }
    return done.promise
}
