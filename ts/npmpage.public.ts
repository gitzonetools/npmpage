import * as plugins from "./npmpage.plugins";
import * as paths from "./npmpage.paths";
import * as npmpageOptions from "./npmpage.options";

// interfaces
import { INpmpageConfig } from "./npmpage.options"

export let init = (configArg: INpmpageConfig) => {
    let done = plugins.q.defer();
    plugins.smartfile.fs.ensureDirSync(paths.pagesDir);
    if (configArg.coverage) {
        plugins.smartfile.fs.copySync(
            paths.coverageDir,
            plugins.path.join(paths.pagesDir,"coverage")
        );
    };
    done.resolve(configArg);
    return done.promise;
}