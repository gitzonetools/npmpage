import * as early from "early";
early.start("npmpage");
import * as plugins from "./npmpage.plugins";
import * as cli from "./npmpage.cli";
early.stop().then(() => {
    plugins.beautylog.figletSync("npmpage");
    
});

