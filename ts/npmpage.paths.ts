import * as plugins from './npmpage.plugins'

// package dirs
export let packageDir = plugins.path.join(__dirname,'../../')

// packagefiles
export let webJsBundleFile = plugins.path.join(packageDir,'plr_bundle/build.js')

// project dirs
export let cwd = process.cwd()

export let docsDir = plugins.path.join(cwd, 'docs/')
export let pagesDir = plugins.path.join(cwd, 'pages/')
export let publicDir = plugins.path.join(cwd, 'public/')
export let coverageDir = plugins.path.join(cwd, 'coverage/')
