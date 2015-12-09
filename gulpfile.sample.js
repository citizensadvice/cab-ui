/**
 *	@fileoverview
 *	Sample gulpfile tasks to use when including this repository in another project
 */
'use strict';

// Node modules
var URL = require('url');

// Gulp modules
var gulp = require( 'gulp' );
var less = require( 'gulp-less' );
var sourcemaps = require('gulp-sourcemaps');

// Post CSS plugins
var postcss = require('gulp-postcss');
// Minify
var cssnano = require('cssnano');
// Add a px fallback for rem for IE8
var pixrem = require('pixrem');
// Add a hex fallback for rgba for IE8
var rgbaFallback = require('postcss-color-rgba-fallback');
// Add an opacity fallback for IE8
var opacity = require('postcss-opacity');
// Automatically add/remove required/unrequired prefixes
var autoprefixer = require('autoprefixer');
// Copy referenced assets to a folder
var copyAssets = require('postcss-copy-assets');
// Add a revision query to the end of the url to allow far future caching
var urlrev = require('postcss-urlrev');

// Add the cache buster hash to the url
function cacheBuster( url, hash ) {
    var parsedUrl = URL.parse( url, true );
    parsedUrl.query.v = hash;
    return URL.format(parsedUrl);
}

// ------- Tasks ---------

gulp.task( 'less', function() {
	
	var postCssPlugins = [
		autoprefixer({ browsers: ['> 1%','ie >= 8'] }), 
		rgbaFallback,
		opacity,
		pixrem, 
		copyAssets,
		// This is useful if your project is using far future caching, remove if not
		urlrev( { replacer: cacheBuster} ),
		// This step takes about 7 seconds.  See the main gulp file for dev workarounds for this
		cssnano
	];

	var targetPath = 'public/css';

    return gulp.src(['source/*.less'])
		.pipe( sourcemaps.init() ) // Generate sourcemaps
		.pipe( less() ) // Transform to less
		.pipe( postcss( postCssPlugins, { to: targetPath + '/assets' } ) ) // Postcss (the "to" is for copyAssets)
		.pipe( sourcemaps.write('.') ) // Write the sourcemaps
		.pipe( gulp.dest(targetPath) ); // Write the less
});

gulp.task( 'default', ['less'] );




