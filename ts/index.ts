import * as early from 'early'
early.start('npmpage')
import * as plugins from './npmpage.plugins'
import * as promisechain from './npmpage.promisechain'
import { npmpageCli } from './npmpage.cli'

early.stop().then(() => {
    plugins.beautylog.figletSync('npmpage')
    npmpageCli.standardTask().then((argv) => {
        plugins.beautylog.info('Executing standardTask')
        promisechain.run(argv)
            .then(() => {
                plugins.beautylog.success('npmpage created!')
            })
            .catch(err => { console.log(err) })
    })
    npmpageCli.startParse()
})
