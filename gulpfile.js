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
var jade = require('gulp-jade');
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

// ------- Less tasks --------

// Clean the built directory
gulp.task( 'clean-less', function() {
	return del([
	    'public/css/**'
	]);
} );

gulp.task( 'less', ['clean-less'], function() {
	
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

	var targetPath = 'public/css';

    return gulp.src(['libs/*.less','libs/vendors/prism/prism.css'])
		.pipe( sourcemaps.init() ) // Generate sourcemaps
		.pipe( less() ) // Transform to less
		.pipe( postcss( postCssPlugins, { to: targetPath + '/assets' } ) ) // Postcss (the "to" is for copyAssets)
		.pipe( sourcemaps.write('.') ) // Write the sourcemaps
		.pipe( gulp.dest(targetPath) ); // Write the less
});

gulp.task( 'watch-less', ['clean-jade'], function() {
	gulp.watch('libs/**/*.less', ['less']);
} );

// ------- Jade tasks --------

gulp.task( 'clean-jade', function() {
	return del([
	    'public/*.html'
	]);
} );

gulp.task( 'jade', ['clean-jade'], function() {

	return gulp.src('libs/jade/*.jade')
    	.pipe( jade( { pretty: true }) )
    	.pipe( gulp.dest('public') );
} );

gulp.task( 'jade', ['clean-jade'], function() {

	return gulp.src('libs/jade/*.jade')
    	.pipe( jade( { pretty: true }) )
    	.pipe( gulp.dest('public') );
} );

gulp.task( 'watch-jade', ['clean-jade'], function() {
	gulp.watch('libs/**/*.jade', ['jade']);
} );

// ------- gh-pages tasks --------

gulp.task( 'gh-pages', ['production'], function() {

	return gulp.src('public/**')
    	.pipe( deploy() );

} );

// ------- Global tasks --------

// Flag to tell us this is a production build
var productionBuild = false;

gulp.task( 'production', function() {
	// This task just sets a flag to say we are in production mode
	// This is a bit of a hack as this is task is technically carried out
	// in parallel to other tasks and order is not guarenteed,
	// however as long as it is specified
	// first it should first.
	productionBuild = true;
} );

gulp.task( 'clean', function() {
	// This task just sets a flag to say we are in production mode
	// This is a bit of a hack as this is task is technically carried out
	// in parallel to other tasks and order is not guarenteed,
	// however as long as it is specified
	// first it should first.
	productionBuild = true;
} );

// ------- Task groups --------

// Clean all the things
gulp.task( 'clean', [ 'clean-jade', 'clean-less'] );

// Watch all the things
gulp.task( 'watch', ['default', 'watch-less', 'watch-jade'] );

// Single build
gulp.task( 'default', ['less','jade'] );

// Production build - also minifies the JS
gulp.task( 'build', ['production', 'default'] );


