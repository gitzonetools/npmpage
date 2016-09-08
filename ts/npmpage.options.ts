import * as plugins from './npmpage.plugins'
import * as paths from './npmpage.paths'

export interface INpmpageConfig {
    coverage: boolean,
    docs: boolean,
    gitbook: boolean
}

export let init = () => {
    let done = plugins.q.defer<INpmpageConfig>()
    let folderArray = plugins.smartfile.fs.listFoldersSync(paths.cwd)

    let npmpageConfig: INpmpageConfig = {
        coverage: false,
        docs: false,
        gitbook: false
    };

    if (folderArray.indexOf('docs') !== -1) {
        plugins.beautylog.ok('found docs')
        npmpageConfig.docs = true
    }

    if (folderArray.indexOf('coverage') !== -1) {
        plugins.beautylog.ok('found coverage data')
        npmpageConfig.coverage = true
    }

    if (folderArray.indexOf('gitbook') !== -1) {
        plugins.beautylog.ok('found gitbook')
        npmpageConfig.gitbook = true
    }
    done.resolve(npmpageConfig)
    return done.promise
}
