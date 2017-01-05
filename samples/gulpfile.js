/**
 *  @fileoverview
 *  Sample gulpfile tasks to use when including this repository in another project
 */

// Define paths, relative to gulpfile.js
var cssPath     = 'css/';
var assetPath   = 'assets/**/*';

// Include sourcemaps? (significantly increases CSS filesize)
var makeMaps    = false;

// Load plugins
var gulp = require('gulp'),
	// For browser prefixing CSS
	autoprefixer = require('gulp-autoprefixer'),
	// Move assets out of libs
	copyAssets = require('postcss-copy-assets'),
	// Super minify CSS
	cssnano = require('cssnano'),
	// Pipe acctions conditionally
	gulpif = require('gulp-if'),
	// Gulp utilities
	gutil = require('gulp-util'),
	// Compress images
	imagemin = require('gulp-imagemin'),
	// Compile LESS
	less = require('gulp-less'),
	// Allows for glob use in LESS
	lessGlob = require('less-plugin-glob'),
	// IE8 opacity fallbacl
	opacity = require('postcss-opacity'),
	// Pixel fallback for rems
	pixrem = require('pixrem'),
	// Prevent watch from stopping on errors
	plumber = require('gulp-plumber'),
	// Precompile CSS
	postcss = require('gulp-postcss'),
	// Hex fallback for rgba colours
	rgbaFallback = require('postcss-color-rgba-fallback'),
	// Create CSS sourcemaps
	sourcemaps = require('gulp-sourcemaps');

// gulp cab-ui
gulp.task('cab-ui', function() {
	// Define which plugins should be used as part of PostCSS
	var postCssPlugins = [
		copyAssets,
		opacity,
		pixrem,
		rgbaFallback
	];
	postCssPlugins.push(cssnano);
	return gulp.src('node_modules/cab-ui/libs/site.less')
		// Prevent breaks from errors
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(less().on('error', function(err){
			gutil.log(err);
			this.emit('end');
		}))
		.pipe(autoprefixer({
			browsers:[
				'> 1%',
				'last 2 version',
				'ie >= 8'
			],
			flexbox:'no-2009'
		}))
		.pipe(postcss(postCssPlugins, {to:assetPath}))
		.pipe(gulpif(makeMaps, sourcemaps.write()))
		.pipe(gulpif(makeMaps, sourcemaps.init({loadMaps: true})))
		.pipe(gulp.dest(cssPath))
		.pipe(gulpif(makeMaps, sourcemaps.write('.')))

		gulp.src('node_modules/cab-ui/libs/assets/images/**/*')
			.pipe(plumber())
			.pipe(imagemin())
			.pipe(gulp.dest(assetPath))
});
