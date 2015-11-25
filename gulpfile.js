/**
 *	@fileoverview
 *	Runs the gulp build tasks
 */

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
// Add version to the asset based on the updated date.  This allows us to use far future caching on the asset
var cachebuster = require('postcss-cachebuster');

var productionBuild = false;

gulp.task( 'production', function() {
	// This task just sets a flag to say we are in production mode
	productionBuild = true;
} );

gulp.task( 'less', function() {
	var postCssPlugins = [
		autoprefixer({ browsers: ['> 1%','ie >= 8'] }), 
		rgbaFallback,
		opacity,
		pixrem, 
		copyAssets, 
		cachebuster
	];

	// Only include cssnano on a production build as it takes ages
	if ( productionBuild ) {
		postCssPlugins.push(cssnano);
	}

    return gulp.src('libs/*.less')
		.pipe( sourcemaps.init() ) // Generate sourcemaps
		.pipe( less() ) // Transform to less
		.pipe( postcss( postCssPlugins, { to: 'public/css/assets' } ) ) // Postcss (the "to" is for copyAssets)
		.pipe( sourcemaps.write('.') ) // Write the sourcemaps
		.pipe( gulp.dest( 'public/css') ); // Write the less
});

// Watch everything in the static-src folder and rerun default if it changes
gulp.task('watch-less', function () {
    gulp.watch('libs/**', ['default']);
});

gulp.task('default', ['less']);
// These tasks are actually run in parallel, but as production will be called and run first
gulp.task('build', ['production','less'] );
gulp.task('watch', ['default', 'watch-less']);

