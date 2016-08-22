import * as plugins from "./npmpage.plugins";
import * as paths from "./npmpage.paths";
import * as npmpageOptions from "./npmpage.options";

// interfaces
import { INpmpageConfig } from "./npmpage.options"

export let init = (config: INpmpageConfig) => {
    let done = plugins.q.defer();
    plugins.smartfile.fs.ensureDirSync(paths.publicDir);
    plugins.beautylog.ok("created npmpage directory");
    if (config.coverage) {
        plugins.smartfile.fs.copySync(
            paths.coverageDir,
            plugins.path.join(paths.publicDir,"coverage")
        );
    };
    if (config.docs) {
        plugins.smartfile.fs.copySync(
            paths.docsDir,
            plugins.path.join(paths.publicDir,"docs")
        )
    };
    done.resolve();
    return done.promise;
}