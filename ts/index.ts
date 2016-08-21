import * as early from "early";
early.start("npmpage");
import * as plugins from "./npmpage.plugins";
import * as cli from "./npmpage.cli";
import * as promisechain from "./npmpage.promisechain";
early.stop().then(() => {
    plugins.beautylog.figletSync("npmpage");
    promisechain.run()
        .then(() => {
            plugins.beautylog.success("npmpage created!");
        })
        .catch(err => {console.log(err)});
});

