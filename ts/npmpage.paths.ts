import * as plugins from "./npmpage.plugins";

export let cwd = process.cwd();
export let publicDir = plugins.path.join(cwd, "public/");
export let coverageDir = plugins.path.join(cwd, "coverage/");
export let docsDir = plugins.path.join(cwd, "docs/");