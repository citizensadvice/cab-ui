# Citizens Advice UI

Design elements to be used across all Citizens Advice products.

© Citizens Advice

The style guide is available on http://citizensadvice.github.io/cab-ui/

### Folder structure

    ├─┐  lib              Source Less, JS, images and fonts
    │ ├─ assets           All images and fonts required by the Less
    │ ├─ jade             Jade templates
    │ ├─ template         Jade includes
    │ └─ ...              Various folders containing less files
    │
    ├─┐  public           Target folder for building the CSS and holds the test html files
    │ ├─ images           Images required by the html
    │ ├─ js               All JavaScript files required by the html
    │ └─ robots.txt       robots.txt to stop gh-pages appearing in google
    │
    ├─ package.json       Node.js dependancies for the build process
    └─ gulpfile.js        Defines the build process

## Including in a project

This repository is a set of comment styles and design elements that can be included in another project.

Other projects should:

* include this repository as node dependancy in their package.json file.  The styles and assets will then be available in `node_modules\cab-ui`
* import the less files they required into their own stylesheet.  You may need to setup a symlink from the folder containing the less file to the image assets folder.
* setup a build process using the same processors as this repository.  See `gulpfile.sample.js` for a minimal version.

Example of how to include the package in package.json

```json
{
    dependencies: {
        "cab-ui": "https://github.com/citizensadvice/cab-ui.git#v1.0.0",
    }
}
```

## Versioning

As this repository is used by other projects it is important to version the code.  We are using [semantic versioning](http://semver.org/).

`npm` can be used to increase the version numbers and, crucially, tag the git commit.

* `npm version patch` Increase the patch version and tag
* `npm version minor` Increase the minor version and tag
* `npm version major` Increase the major version and tag

Git push does not automatically transfer tags to github.  In order to push your tags you need to do either `git push origin tagname` to push a single tag or `git push --tags` to push all tags.

## Build process

The build process uses [Gulp](http://gulpjs.com/).

1. Install the latest version of [Node.js](https://nodejs.org/en/)
2. Install Gulp globally `npm install gulp -g`
3. Install the dependancies locally `npm install`
4. To build:
  * To build once run `gulp`
  * To build and watch for changes run `gulp watch`
  * To build for production run `gulp build`.  This will clean the public directory and minify the CSS.
  * To clean the public directory run `gulp clean`
  * To publish to gh-pages run `gulp gh-pages`.  This will run the full build process and publish directly to the gh-pages branch.

### Less

The CSS is written in [Less](http://lesscss.org/).  The build process transforms the Less into a single CSS file.

The process also uses [PostCSS](https://github.com/postcss/postcss) plugins to make writing the CSS easier.  Plugins used are:

* [autoprefixer](https://github.com/postcss/autoprefixer) - Automatically add css prefixes for older browsers
* [https://github.com/postcss/postcss-color-rgba-fallback](postcss-color-rgba-fallback) - Add a hex colour fallback for rgba for IE8
* [postcss-opacity](https://github.com/iamvdo/postcss-opacity) - Add a filter fallback for opacity for IE8
* [pixrem](https://github.com/robwierzbowski/node-pixrem) - Add pixel fallback for rem units for IE8
* [postcss-copy-assets](https://github.com/shutterstock/postcss-copy-assets) - Copy and rebase image and
* [cssnano](http://cssnano.co/) - Minify the CSS

## Generating the style-guide

The build process generates the style-guide in the public folder.

Running the gulp gh-pages task will publish this guide to the gh-pages branch which is available from http://citizensadvice.github.io/cab-ui/.

If you want to run the style-guide locally on a web server then `npm run server` will start a website on localhost:8080 serving the contents of public folder.  Alternatively you can install [http-server](https://www.npmjs.com/package/http-server) globally (`npm install http-server -g`) and start a server for any directory by running `http-server`.

## Browser testing

The easiest way to do browser testing is with [Browser Sync](http://www.browsersync.io/).

1. Install Browser Sync `npm install -g browser-sync`
2. Run Browser Sync, watching HTML and CSS files `browser-sync start --server --files="*.html, css/*.css"`


## CSS size reduction

Currently the CSS file is bloated, and far too large. Here are some tips for keeping file size down;

### Don't compile mixin classes

Less won't compile mixins by themselves. This means that adding `()` at the end of a class will prevent it from outputting to the css. For example:

```less
// This will compile into the stylesheet
.icon {
    font-family: 'cab-icons';
}

// This won't
.icon() {
    font-family: 'cab-icons';
}
```

This also reduces the size of styles calling the mixin. For example:

```less
// Without ()
.icon {
    font-family: 'cab-icons';
}
.search,
.email {
  .icon;
}
// Compiles into
.icon,
.search,
.email {
  font-family: 'cab-icons';
}

// Whereas with ()
.icon() {
    font-family: 'cab-icons';
}
.search,
.email {
  .icon;
}
// Compiles into
.search,
.email {
  font-family: 'cab-icons';
}
```

### Folder structure

Gradually, the LESS files will need to fit into a new folder structure.

	 └─┐ lib   				Any *.less files in this directory will be built
	   ├─┐ base 				used for all base level LESS files, such as
	   │ ├─ colors.less
	   │ └─ variables.less
	   ├─ vendors				all third party CSS and LESS, such as resets
	   ├─ mixins				general functional mixins will sit here, giving us a library of funtional mixins to draw on
	   ├─ modules				all website page elements, such as breadcrumbs
	   └─ assets				all images and fonts required by the CSS






