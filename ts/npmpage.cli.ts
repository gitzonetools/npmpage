import { Smartcli } from 'smartcli'
import * as q from 'q'

import * as plugins from './npmpage.plugins'
import * as npmpageOptions from './npmpage.options'
import * as npmpageMods from './npmpage.mods'

export let run = () => {
    let localCli = new Smartcli()
    localCli.addVersion('beta')
    // Standard Task
    localCli.standardTask().then((argvArg) => {
        plugins.beautylog.figletSync('npmpage')
        npmpageOptions.run(argvArg).then(configArg => {
            npmpageMods.modStandard.load().then(modStandard => {
                modStandard.run(configArg).catch(err => { console.log(err) })
            })
        })
    })

    // Publish Task
    localCli.addCommand({commandName: 'publish'}).then(argvArg => {
        plugins.beautylog.figletSync('npmpage')
        npmpageOptions.run(argvArg).then(configArg => {
            npmpageMods.modPublish.load().then(modPublish => {
                modPublish.run(configArg)
            })
        })
    })

    localCli.startParse()
}
