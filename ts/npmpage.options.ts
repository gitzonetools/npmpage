import * as plugins from './npmpage.plugins'
import * as paths from './npmpage.paths'

export type TSupportedHosts = 'gitlab'

export interface INpmpageConfig {
    coverage: boolean,
    docs: boolean,
    serve: boolean
    publish: boolean
    publishTarget: TSupportedHosts,
    projectinfo: plugins.projectinfo.ProjectInfo
}

export let run = ( argvArg ) => {
    let done = plugins.q.defer<INpmpageConfig>()
    let folderArray = plugins.smartfile.fs.listFoldersSync(paths.cwd)

    let npmpageConfig: INpmpageConfig = {
        coverage: false,
        docs: false,
        serve: false,
        publish: false,
        publishTarget: null,
        projectinfo: new plugins.projectinfo.ProjectInfo(paths.cwd)
    }

    if ( argvArg.serve ) {
        npmpageConfig.serve = true
    }

    if ( argvArg.publish ) {
        npmpageConfig.publish = true
        npmpageConfig.publishTarget = argvArg.publish
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
