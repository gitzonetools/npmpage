import * as plugins from './mod.plugins'
import * as paths from '../npmpage.paths'
import * as npmpageOptions from '../npmpage.options'
// interfaces
import { INpmpageConfig } from '../npmpage.options'

export let init = (configArg: INpmpageConfig) => {
    let done = plugins.q.defer()
    plugins.smartfile.fs.ensureDirSync(paths.pagesDir)
    if (configArg.coverage) {
        plugins.smartfile.fs.copySync(
            paths.coverageDir,
            plugins.path.join(paths.pagesDir,'coverage')
        )
    };
    if (configArg.host === 'gitlab') {
        plugins.beautylog.ok('Specified host is GitLab! Thus copying pages/ to public/')
        plugins.smartfile.fs.copySync('./pages','./public')
    } else if (configArg.host === null) {
        plugins.beautylog.log('no host specified!')
    } else {
        plugins.beautylog.warn(`Host ${configArg.host} not supported`)
    }
    done.resolve(configArg)
    return done.promise
}
