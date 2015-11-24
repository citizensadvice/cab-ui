/**
 *	@fileoverview
 *	Runs the gulp build tasks
 */

// Import dependencies
var gulp = require( 'gulp' );
var less = require( 'gulp-less' );
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
var pixrem = require('pixrem');
var cachebuster = require('postcss-cachebuster');

// Define a task to turn the less into CSS
gulp.task( 'less', function() {
    return gulp.src('libs/*.less')
		.pipe( sourcemaps.init() ) // Generate sourcemaps
		.pipe( less() ) // Transform to less
		.pipe( postcss( [/*cssnano,*/pixrem,cachebuster] ) )
		.pipe( sourcemaps.write('.') ) // Write the sourcemaps
		.pipe( gulp.dest( 'public/css') ); // Write the less
});

// Watch everything in the static-src folder and rerun default if it changes
gulp.task('watch-less', function () {
    gulp.watch('static-src/**', ['default']);
});

gulp.task('default', ['less']);
gulp.task('watch', ['default', 'watch-less']);

