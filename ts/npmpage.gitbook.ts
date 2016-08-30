import * as plugins from "./npmpage.plugins";
import * as paths from "./npmpage.paths";

// interface
import { INpmpageConfig } from "./npmpage.options"

export let run = (configArg: INpmpageConfig) => {
    let done = plugins.q.defer();
    if (configArg.docs) {
        plugins.beautylog.log("now compiling gitbook");
        plugins.shelljs.exec(`(cd ./docs && node ${paths.gitBookBin} install)`);
        plugins.shelljs.exec(`${paths.gitBookBin} build docs/ pages/api/`)
    }
    done.resolve(configArg);
    return done.promise;
}