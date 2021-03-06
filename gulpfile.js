/**
 *	@fileoverview
 *	Runs the gulp build tasks
 */
'use strict';

// Load plugins
var gulp = require('gulp'),

	// Live reloading localhost
	browserSync = require('browser-sync'),
	// Creates OSX notifications
	notify = require('gulp-notify'),
	// Copy referenced assets to a folder
	copyAssets = require('postcss-copy-assets'),

	// Node modules
	URL = require('url'),
	pathUtils = require('path'),
	prettyHrtime = require('pretty-hrtime'),

	// Gulp modules
	del = require('del'),
	deploy = require('gulp-gh-pages'),
	gulp = require( 'gulp' ),
	gulpif = require( 'gulp-if' ),
	gutil = require('gulp-util'),
	jade = require('gulp-jade'),
	less = require( 'gulp-less' ),
	sourcemaps = require('gulp-sourcemaps'),
	// Plumbers fix pipes
	plumber = require('gulp-plumber'),

	// Styles
	postcss = require('gulp-postcss'),
	cssnano = require('cssnano'),
	pixrem = require('pixrem'),
	rgbaFallback = require('postcss-color-rgba-fallback'),
	opacity = require('postcss-opacity'),
	autoprefixer = require('autoprefixer'),
	lessGlob = require('less-plugin-glob'),

	// Compress images
	imagemin = require('gulp-imagemin');

/*
 * Less tasks
 */

// Clean the build directory
gulp.task( 'clean-less', function() {
	return del('public/css/**');
});

gulp.task( 'less', function() {
	var postCssPlugins = [
		autoprefixer({ browsers: ['> 1%','last 2 version','ie >= 8'], flexbox: 'no-2009' }),
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
	return gulp.src(['libs/styles/*.less'])
		.pipe( gulpif(!productionBuild, sourcemaps.init({largeFile: true})) ) // Generate sourcemaps
		.pipe(less({ plugins: [lessGlob] }).on('error', function(err){
			gutil.log(err);
			this.emit('end');
		}))
		.on("error", notify.onError(function (error) {
			return error.message;
		}))
		.pipe( gulpif(!productionBuild,sourcemaps.write()) )
		.pipe( gulpif(!productionBuild,sourcemaps.init({loadMaps: true})) ) // Generate sourcemaps
		// .pipe( sourcemaps.init({loadMaps: true} )
		.pipe( postcss( postCssPlugins, { to: targetPath + '/assets' } ) ) // Postcss (the "to" is for copyAssets)
		.pipe( gulpif(!productionBuild,sourcemaps.write('.')) ) // Write the sourcemaps
		.pipe( gulp.dest(targetPath) ) // Write the less
		.pipe(browserSync.reload({stream: true}))
		.pipe( notify({ message: 'Less successfully compiled' }));
});

gulp.task( 'watch-less', function() {
	gulp.watch( 'libs/styles/**/*.less', ['less'] );
});

/*
 * Jade tasks
 */

gulp.task( 'clean-jade', function() {
	return del([
		// Delete the contents of public/
		'public/*',
		// but ignore these ones
		'!public/js',
		'!public/css',
		'!public/images',
		'!public/robots.txt'
	]);
});

gulp.task( 'jade', function() {
	return gulp.src(['libs/jade/**/*.jade', '!libs/jade/templates/**/*.jade'])
		.pipe( jade( { pretty: true, basedir: "libs" }) )
		.pipe( gulp.dest('public') )
		.pipe(browserSync.reload({stream: true}));
});

gulp.task( 'watch-jade', function() {
	// This just rebuilds the affects file - cheap
	gulp.watch('libs/jade/**/*.jade', function(event) {

		// This is mostly a hack to make it look like proper task in the console
		var start = process.hrtime();
		gutil.log('Starting', "'" + gutil.colors.cyan('jade') + '"...');

		// Find the relative path between the jade directory and the file
		// and apply that to the public directory to get the right folder
		var relativePath = pathUtils.parse( pathUtils.relative(
			pathUtils.resolve( __dirname, 'libs/jade' ),
			event.path
		)).dir;
		relativePath = pathUtils.resolve( 'public', relativePath );

		gulp.src(event.path)
			.pipe(plumber())
			.pipe(jade({ pretty: true, basedir: "libs" }).on('error', function(err){
				gutil.log(err);
				this.emit('end');
			}))
			.on("error", notify.onError(function (error) {
				return error.message;
			}))
			.pipe(gulp.dest(relativePath))
			.on( 'finish', function() {
				var end = process.hrtime(start);
				gutil.log(
					'Finished',
					"'" + gutil.colors.cyan('jade') + '"',
					'after',
					gutil.colors.magenta(prettyHrtime(end))
				);
			})
			.pipe(browserSync.reload({stream: true}))
			.pipe( notify({ message: 'Jade successfully compiled' }));
	});

	// This will rebuild all of jade - expensive
	//gulp.watch('libs/template/*.jade', ['jade']);
});

/*
 * Images tasks
 */
 gulp.task( 'clean-images', function() {
 	return del('public/images');
 });

 gulp.task('images', function() {
	 gulp.src('libs/assets/images/**/*')
		 .pipe(plumber())
		 .pipe(imagemin())
		 .pipe(gulp.dest('public/images'))
		//  .pipe(notify({ message: 'Images complete' }));
 });

 gulp.task( 'watch-images', function() {
 	gulp.watch( 'libs/assets/images/**/*', ['images'] );
 });

/*
 * gh-pages
 */

gulp.task( 'gh-pages', ['build'], function() {

	return gulp.src('public/**')
		.pipe( deploy() );

});

/*
 * Global tasks
 */

// Starts localhost
gulp.task('local', function() {
	browserSync({
		server: { baseDir: "public/" },
		// Makes sure it opens in Chrome, regardless of default browser
		browser: "google chrome",
		notify: false
	});
});

// Flag to tell us this is a production build
var productionBuild = false;

gulp.task( 'production', function() {
	// This task just sets a flag to say we are in production mode
	// This is a bit of a hack as this is task is technically carried out
	// in parallel to other tasks and order is not guarenteed,
	// however as long as it is specified
	// first it should first.
	productionBuild = true;
});

gulp.task( 'clean', function() {
	// This task just sets a flag to say we are in production mode
	// This is a bit of a hack as this is task is technically carried out
	// in parallel to other tasks and order is not guarenteed,
	// however as long as it is specified
	// first it should first.
	productionBuild = true;
});

// ------- Task groups --------

// Clean all the things
gulp.task( 'clean', [ 'clean-jade', 'clean-less', 'clean-images'] );

// Watch all the things
gulp.task( 'watch', ['default', 'watch-less', 'watch-jade', 'watch-images', 'local'] );

// Single build
gulp.task( 'default', ['less','jade', 'images'] );

// Production build - also minifies the JS
gulp.task( 'build', ['production', 'clean', 'default'] );
