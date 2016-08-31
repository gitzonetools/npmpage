# npmpage
npmpage creates nice static pages for your modules.

## Availabililty
[![npm](https://img.shields.io/badge/npm-npmjs.com-blue.svg)](https://www.npmjs.com/package/npmpage)
[![git](https://img.shields.io/badge/git-gitlab.com-blue.svg)](https://gitlab.com/pushrocks/npmpage)
[![git](https://img.shields.io/badge/git%20mirror-github.com-blue.svg)](https://github.com/pushrocks/npmpage)
[![docs](https://img.shields.io/badge/docs-gitlab.io-blue.svg)](https://pushrocks.gitlab.io/npmpage/docs)

## Status for master
[![build status](https://gitlab.com/pushrocks/npmpage/badges/master/build.svg)](https://gitlab.com/pushrocks/npmpage/commits/master)
[![coverage report](https://gitlab.com/pushrocks/npmpage/badges/master/coverage.svg)](https://gitlab.com/pushrocks/npmpage/commits/master)
[![Dependency Status](https://david-dm.org/pushrocks/npmpage.svg)](https://david-dm.org/pushrocks/npmpage)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/npmpage/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/npmpage/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/npmpage/badges/code.svg)](https://www.bithound.io/github/pushrocks/npmpage)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)

## Usage
npmpage makes it easy to create pages for your npm modules.
The module page root will be created at ./pages which you can then use as webroot facing the public. 

### Default behaviour
By default npmpage will

* look for README.md at ./
* look for a gitbook in the ./docs/ directory and compile it to /pages/docs/
* look for api docs at ./pages/api/ (api docs should be created customly by typedoc or jsdoc)
* create a nice page from README with links to the api and gitbook docs
