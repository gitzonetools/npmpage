import * as plugins from "./npmpage.plugins";
import * as paths from "./npmpage.paths";

let npmpageConfig = {
    coverage: false,
    docs: false
}

export let init = () => {
    let done = plugins.q.defer();
    let folderArray = plugins.smartfile.fs.listFoldersSync(paths.cwd);
    if(folderArray.indexOf("coverage") != -1){
        plugins.beautylog.ok("found coverage data");
    }
    if(folderArray.indexOf("docs") != -1){
        plugins.beautylog.ok("found docs");
    }
    done.resolve();
    return done.promise;
}