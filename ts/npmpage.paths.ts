import * as plugins from './npmpage.plugins'

// package dirs
export let packageDir = plugins.path.join(__dirname,'../../')

// project dirs
export let cwd = process.cwd()

export let docsDir = plugins.path.join(cwd, 'docs/')
export let docsOutputDir = plugins.path.join(cwd, 'pages/')

export let pagesDir = plugins.path.join(cwd, 'pages/')
export let coverageDir = plugins.path.join(cwd, 'coverage/')
