import * as plugins from "./npmpage.plugins";
import * as paths from "./npmpage.paths";
import * as cli from "./npmpage.cli"
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
    if(cli.npmpageCli.argv.host === "gitlab"){
        plugins.beautylog.ok("Specified host is GitLab! Thus copying pages/ to public/");
        plugins.smartfile.fs.copySync("./pages","./public");
    } else {
        plugins.beautylog.warn("no host specified");
    }
    done.resolve(configArg);
    return done.promise;
}