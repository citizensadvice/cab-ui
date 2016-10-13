# Citizens Advice UI

Design elements to be used across all Citizens Advice products.

© Citizens Advice

The style guide is available on http://citizensadvice.github.io/cab-ui/

## Gulp sample

This repository is a set of comment styles and design elements that can be included in another project.

Other projects should:

* include this repository as node dependancy in their package file.  The styles and assets will then be available in `node_modules/cab-ui`. See `sample/package.json` for a ready-to-use package file
* setup a build process using the same processors as this repository.  See `sample/gulpfile.js` for a ready-to-use gulp file
* regularly update this repository in their package file

## Getting started

The easiest way to get started is:

1. Copy `gulpfile.js` and `package.json` into the root of your project.
2. From the root directory, run `npm-install`, which will download all the required gulp modules needed for cab-ui.
3. Update the setting in `gulpfile.js` (see gulpfile.js in this readme).
4.  From the root directory, run `gulp cab-ui`, which will compile the CSS and move the assets into your project.

### Keeping cab-ui updated

To keep cab-ui up to date change the version in `packages.json`, then run `npm install`, then `gulp cab-ui`.

```json
"cab-ui": "https://github.com/citizensadvice/cab-ui.git#v2.1.2",
```

## gulpfile.js

The sample `gulpfile.js` only contains one task, which can be run with `gulp cab-ui`. This task will:

* compile all less files
* add browser prefixing to all styles
* compress all styles
* write sourcemaps (if enabled)

There are variables with preferences at the top of the file. These should be checked before first compile. By default source maps are disabled as they significantly increase the file size.

```javascript
// Define paths, relative to gulpfile.js
var cssPath     = 'css/';
var assetPath   = 'assets/';

// Include sourcemaps? (significantly increases CSS filesize)
var makeMaps    = false;
```

## package.json

The sample `package.json` includes all the gulp packages needed to run `gulp cab-ui`.