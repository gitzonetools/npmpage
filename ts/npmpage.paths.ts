import * as plugins from "./npmpage.plugins";

// package dirs
export let packageDir = plugins.path.join(__dirname,"../");

// module paths
export let gitBookBin = plugins.path.join(packageDir,"node_modules/","gitbook-cli/","bin/gitbook.js");

// project dirs
export let cwd = process.cwd();
export let pagesDir = plugins.path.join(cwd, "pages/");
export let coverageDir = plugins.path.join(cwd, "coverage/");
export let docsDir = plugins.path.join(cwd, "docs/");