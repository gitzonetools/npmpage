import * as early from 'early'
early.start('npmpage')
import * as plugins from './npmpage.plugins'
import * as npmpageCli from './npmpage.cli'

early.stop().then(() => {
    npmpageCli.run()
})
