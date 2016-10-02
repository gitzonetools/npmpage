import * as q from 'q'

import { INpmpageConfig } from '../npmpage.options'

export let run = (configArg: INpmpageConfig) => {
    let done = q.defer()
    configArg.argv
    return done.promise
}
