# npmpage
npmpage creates nice static pages for your modules.

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/npmpage)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://gitlab.com/pushrocks/npmpage)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/npmpage)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/npmpage/docs)

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
* look for a docs in the ./docs/ and create a nice page at pages/
* prepare page compatibility with different services like gitlab pages

> Note: If you have API docs store them at pages/api npmpage will automatically detect them and intergrate it into the menu.

### How does npmpage operate?
npmpage will compile all your docs into a .json file and then use an Angular2 application to display this data.


[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)