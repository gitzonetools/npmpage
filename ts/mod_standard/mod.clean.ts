import * as q from 'q'
import * as paths from '../npmpage.paths'
import * as plugins from './mod.plugins'

import { INpmpageConfig } from '../npmpage.options'

export let run = (configArg: INpmpageConfig) => {
    let done = q.defer()
    // TODO
    done.resolve(configArg)
    return done.promise
}
