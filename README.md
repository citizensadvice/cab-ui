# Citizens Advice UI

Design elements to be used across all Citizens Advice products.

© Citizens Advice

### Folder structure


	 ├─┐  lib              Source Less, JS, images and fonts
	 │ ├─ ...              Various folders containing less files 
	 │ └─ assets           All images and fonts required by the Less
	 │ 
	 ├─┐  public           Target folder for building the CSS and holds the test html files
	 │ ├─┐  assets         Images and other assets required by the *html*
	 │ | └─ ...
	 │ ├─┐  css            The built CSS files
	 │ │ └─ assets         Images, fonts and other assets required by the *CSS*
	 │ └ *.html...         Sample html files
	 │
	 ├─ package.json       Node.js dependancies for the build process
	 └─ gulpfile.js        Defines the build process

## Including in a project

This repository is a set of comment styles and design elements that can be included in another project.

Other projects should:

* include this repository as dependancy
* import the less files they required into their own stylesheet
* setup a build process using the same processors as this repository.

## Build process

The build process uses [Gulp](http://gulpjs.com/).

1. Install the latest version of [Node.js](https://nodejs.org/en/)
2. Install Gulp globally `npm install gulp -g`
3. Install the dependancies locally `npm install`
4. To build:
  * To build once run `gulp`
  * To build and watch for changes run `gulp watch`
  * To build for production run `gulp build`

Running `gulp build` also minifies the CSS.  This step takes over 7s.

### Less

The CSS is written in [Less](http://lesscss.org/).  The build process transforms the Less into a single CSS file.

The process also uses [PostCSS](https://github.com/postcss/postcss) plugins to make writing the CSS easier.  Plugins used are:

* [autoprefixer](https://github.com/postcss/autoprefixer) - Automatically add css prefixes for older browsers
* [https://github.com/postcss/postcss-color-rgba-fallback](postcss-color-rgba-fallback) - Add a hex colour fallback for rgba for IE8
* [postcss-opacity](https://github.com/iamvdo/postcss-opacity) - Add a filter fallback for opacity for IE8
* [pixrem](https://github.com/robwierzbowski/node-pixrem) - Add pixel fallback for rem units for IE8
* [postcss-copy-assets](https://github.com/shutterstock/postcss-copy-assets) - Copy and rebase image and font assets to folder
* [postcss-cachebuster](https://github.com/glebmachine/postcss-cachebuster) - Add a version query to assets based on the updated date.  Allow us to support far-future-caching
* [cssnano](http://cssnano.co/) - Minify the CSS



## The big LESS clean up

The attempt is to reduce the overall files, while keeping the styles working for existing page elements. Much of this document should eventually be combined into README.


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






