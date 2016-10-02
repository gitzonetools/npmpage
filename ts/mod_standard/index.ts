import * as plugins from './mod.plugins'

// pipe stops
import { INpmpageConfig } from '../npmpage.options'

import * as modAssets from './mod.assets'
import * as modClean from './mod.clean'
import * as modDocs from './mod.docs'
import * as modServe from './mod.serve'


export let run = (configArg: INpmpageConfig) => {
    let done = plugins.q.defer()

    modClean.run(configArg)
        .then(modDocs.run)
        .then(modAssets.run)
        .then(modServe.run)
        .then(() => {
            done.resolve()
        })
        .catch((err) => {
            console.log(err)
        })
    return done.promise
}
