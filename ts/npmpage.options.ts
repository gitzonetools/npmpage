import * as plugins from "./npmpage.plugins";
import * as paths from "./npmpage.paths";

export interface INpmpageConfig {
    coverage: boolean,
    docs: boolean
};

export let init = () => {
    let done = plugins.q.defer<INpmpageConfig>();
    let folderArray = plugins.smartfile.fs.listFoldersSync(paths.cwd);

    let npmpageConfig: INpmpageConfig = {
        coverage: false,
        docs: false
    };

    if (folderArray.indexOf("coverage") != -1) {
        plugins.beautylog.ok("found coverage data");
        npmpageConfig.coverage = true;
    };
    if (folderArray.indexOf("docs") != -1) {
        plugins.beautylog.ok("found docs");
        npmpageConfig.docs = true;
    }
    done.resolve(npmpageConfig);
    return done.promise;
}