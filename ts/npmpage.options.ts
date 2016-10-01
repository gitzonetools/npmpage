import * as plugins from './npmpage.plugins'
import * as paths from './npmpage.paths'

export interface INpmpageConfig {
    coverage: boolean,
    docs: boolean,
    serve: boolean
}

export let init = ( argvArg ) => {
    let done = plugins.q.defer<INpmpageConfig>()
    let folderArray = plugins.smartfile.fs.listFoldersSync(paths.cwd)

    let npmpageConfig: INpmpageConfig = {
        coverage: false,
        docs: false,
        serve: false
    }

    if ( argvArg.serve ) {
        npmpageConfig.serve = true
    }

    if ( folderArray.indexOf('docs') !== -1 ) {
        plugins.beautylog.ok('found docs')
        npmpageConfig.docs = true
    }

    if ( folderArray.indexOf('coverage') !== -1 ) {
        plugins.beautylog.ok('found coverage data')
        npmpageConfig.coverage = true
    }

    done.resolve(npmpageConfig)
    return done.promise
}
