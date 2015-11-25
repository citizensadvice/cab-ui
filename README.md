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

All 

Gradually, the LESS files will need to fit into a new folder structure.

	 ├─┐ lib   				Any *.less files in this directory will be built
	 │ ├─┐ base 				used for all base level LESS files, such as  
	 │ │ ├─ colors.less  
	 │ │ └─ variables.less  
	 │ ├─ vendors				all third party CSS and LESS, such as resets  
	 │ ├─ mixins				general functional mixins will sit here, giving us a library of funtional mixins to draw on  
	 │ ├─ modules				all website page elements, such as breadcrumbs
	 │ └─ assets				all images and fonts required by the CSS
	 │ 
	 └─┐ public            Target folder for building the CSS and holds the test html files
	   └─┐ css             The built CSS files
	     └─ assets         Any required assets will be added to this folder

Currently, the LESS files are terribly organised.

	. site-new.less 			imports all LESS files directly  
	+-- existing			this contains all the LESS imports from the existing websites LESS structure  
	| +-- inc 				this contains all the original LESS files  
	| +-- beta				this contains all the beta styles used for beta templates over the top of inc files  
	+-- modules				currently a bit of a mess, but will become 'base' folder  
	| +-- colors.less 	
	| +-- variables.less  
	+-- partials			confusingly, this will become the 'modules folder'  
	+-- styleguide			these are LESS files specifically for the styleguide, but not the website (may need to remain)  
	+-- vendor				actually pretty tidy, no need to change this


### Git structure

When creating products for testing we will now use a new branch, with modular naming convention.

Branches should now be named with purpose/epic/product. For example:

	test/consumer/side-navigation

The 'test' naming module should be kept specifically for repo's that will be pushed to gh-pages for user testing.


### Working process

Currently there is a second file site-new.less that directly compiles everything into it, rather than site.less. This allows us to run a 'cleanup' stylesheet and test stylesheet alongside one another. Make all clean up changes to site-new.less.

site-new.less currently imports every file directly, rather than using imports of import files. This helps keep track of all the files.

Use site-new.less as a checklist. The aim is to eventually go through each file listed in there in order and gradually modify them. Refer to the checklist below for guidance on what to change and how.


#### Clean up checklist

1. Is this file needed? Can it be removed?
+ Is the code duplicated already elsewhere is any form?
+ Can these two duplicate files be merged? (there's a good chance one is overwriting the other)
+ Are there any !important classes? If so, fix them.
+ Replace padding and margin values with @box-spacing (1rem), @box-spacing-vertical (0.75rem) and @box-spacing horizontal (1rem). Obvious exceptions to this are spacing around text elements that need to follow the rules of the type contained. E.g. between breadcrumb items, or around headings.
+ Are there any variables used? Make sure they use a variable defined in either base > variables.less or base > colors.less
+ Are there any outdated mixins, or missing mixins?
+ Is there anything that would warrent its own mixin?
+ Could the LESS use BEM structure better (without adjusting the HTML)?
+ Is the file in the correct folder?
+ Is the file correctly listed in site-new.less?