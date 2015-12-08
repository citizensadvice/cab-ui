/**
 *	@fileoverview
 *	Runs the gulp build tasks
 */

// Node modules
var URL = require('url');

// Gulp modules
var gulp = require( 'gulp' );
var del = require('del');
var deploy = require('gulp-gh-pages');
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


// ------- Constants ---------

// Flag to tell us this is a production build
var productionBuild = false;

var targetPath = 'public/css';

// ------- Define tasks ---------

// This task just sets a flag to say we are in production mode
gulp.task( 'production', function() {
	productionBuild = true;
} );

// Clean the built directory
gulp.task( 'clean', function() {
	return del([
	    'public/css/**'
	  ]);
} );

gulp.task( 'less', ['clean'], function() {
	var postCssPlugins = [
		autoprefixer({ browsers: ['> 1%','ie >= 8'] }), 
		rgbaFallback,
		opacity,
		pixrem, 
		copyAssets
	];

	// Only include cssnano on a production build as it takes ages
	if ( productionBuild ) {
		postCssPlugins.push(cssnano);
	}

    return gulp.src(['libs/*.less'])
		.pipe( sourcemaps.init() ) // Generate sourcemaps
		.pipe( less() ) // Transform to less
		.pipe( postcss( postCssPlugins, { to: targetPath + '/assets' } ) ) // Postcss (the "to" is for copyAssets)
		.pipe( sourcemaps.write('.') ) // Write the sourcemaps
		.pipe( gulp.dest(targetPath) ); // Write the less
});

gulp.task( 'gh-pages', ['less'], function() {

	return gulp.src('public/**')
    	.pipe( deploy() );

} );




// Watch everything in the static-src folder and rerun default if it changes
gulp.task('watch-less', function () {
    gulp.watch('libs/**', ['default']);
});

gulp.task('default', ['less']);
// These tasks are actually run in parallel, but as production will be called and run first
gulp.task('build', ['production','less'] );
gulp.task('watch', ['default', 'watch-less']);

