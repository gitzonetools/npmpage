import * as plugins from './npmpage.plugins'
import * as paths from './npmpage.paths'

// interface
import { INpmpageConfig } from './npmpage.options'

export let run = (configArg: INpmpageConfig) => {
    let done = plugins.q.defer()
    if (configArg.gitbook) {
        plugins.smartfile.fs.copySync('./README.md','./gitbook/index.md')
        plugins.beautylog.log('now compiling gitbook')
        plugins.shelljs.exec(`(cd ./gitbook && node ${paths.gitBookBin} install)`)
        plugins.shelljs.exec(`${paths.gitBookBin} build ${paths.gitbookDir} pages/gitbook/`)
        plugins.beautylog.ok('compiled Gitbook!')
    }
    done.resolve(configArg)
    return done.promise
}
