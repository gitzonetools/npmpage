# npmpage
npmpage creates nice static pages for your modules.

## Status

## Usage
npmpage makes it easy to create pages for your npm modules.
The module page root will be created at ./pages which you can then use as webroot facing the public. 

### Default behaviour
By default npmpage will

* look for README.md at ./
* look for a gitbook in the ./docs/ directory and compile it to /pages/docs/
* look for api docs at ./pages/api/ (api docs should be created customly by typedoc or jsdoc)
* create a nice page from README with links to the api and gitbook docs
