import * as plugins from './npmpage.plugins'

// pipe stops
import * as npmpageAngular from './npmpage.angular'
import * as npmpageDocs from './npmpage.docs'
import * as npmpageOptions from './npmpage.options'
import * as npmpagePublic from './npmpage.public'
import * as npmpageServe from './npmpage.serve'

export let run = (argvArg) => {
    let done = plugins.q.defer()
    npmpageOptions.init( argvArg )
        .then(npmpageDocs.run)
        .then(npmpageAngular.run)
        .then(npmpagePublic.init)
        .then(npmpageServe.run)
        .then(() => {
            done.resolve()
        })
        .catch((err) => {
            console.log(err)
        })
    return done.promise
}
