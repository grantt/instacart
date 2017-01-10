'use strict';

// Required modules
var autoprefixer = require('gulp-autoprefixer'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    del = require('del'),
    eslint = require('gulp-eslint'),
    gulp = require('gulp'),
    gulpif = require('gulp-if'),
    gutil = require('gulp-util'),
    livereload = require('gulp-livereload'),
    moduleImporter = require('sass-module-importer'),
    sass = require('gulp-sass'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    watchify = require('watchify'),
    webserver = require('gulp-webserver');

// Local variables
var buildDir = 'app/static/build';

var envParams = {
    stripeToken: process.env.STRIPE_PUBLISHABLE_KEY,
};

// This is the default task and defines what tasks will run when you just type "gulp" at the root of
// your project. Every gulpfile should have define the `default` task.
//
// Gulp tasks can look like the following:
//  1) gulp.task('taskName', function() { /* task operations */ });
//  2) gulp.task('taskName', [ /* list of other tasks to run first */ ], function() { /* task operations */ });
//  3) gulp.task('taskName', [ /* list of other tasks to run */ ]);
//    - (this essentially functions as an alias for a collection of gulp tasks)
gulp.task('default', ['clean'], function() {
    return gulp.start('build');
});

// this task will build our js and css
gulp.task('build', ['scripts', 'css']);

// this task will build and watch js and css for dev
gulp.task('buildDev', ['watchScripts', 'css']);

// this task deletes our built files
gulp.task('clean', function(cb) {
    return del(buildDir, cb);
});

// this task starts the server and watchers for local development
gulp.task('dev', ['buildDev', 'watch']);

// this task watches our src files and rebuilds them on change
gulp.task('watch', function() {
    // this watches for changes to any scss files in our src directory and
    // subdirectories and runs the css tasks when any of them have changed
    gulp.watch('app/static/src/**/*.scss', ['css']);
});

gulp.task('scripts', function() {
    return scripts(false);
});

gulp.task('watchScripts', function() {
    return scripts(true);
});

function scripts(dev) {
    var bundler, rebundle, uglifyWrapper;
    bundler = browserify({
        entries   : 'app/static/src/js/app.js',
        extensions  : ['.js', '.jsx'],
        debug     : true,
        // babelify is an ES6 transpiler that can also
        // compile jsx into js
        transform   : [babelify, ['envify', envParams]],
        cache: {},
        packageCache: {},
        fullPaths: dev
    });

    rebundle = function(ids) {
        gutil.log(gutil.colors.black('Starting') + " '" +
            gutil.colors.cyan('Browserify') + "' " +
            gutil.colors.magenta((ids ? '- ' + ids : '')));
        return bundler.bundle()
            .on('error', function(err) {
                gutil.log(gutil.colors.red(err.message));
            })
            // the name of the compiled file
            .pipe(source('app.js'))
            .pipe(buffer())
            // this initializes file mapping for sourcemap generation
            .pipe(sourcemaps.init({loadMaps: true}))
            // uglify if not development
            .pipe(gulpif(!dev, uglify()))
            // this writes the sourcemaps inline
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(buildDir))
    };

    if (dev) {
        bundler = watchify(bundler);
        bundler.on('update', rebundle);
        bundler.on('log', function (msg) {
            gutil.log(gutil.colors.black('Finished') + " '" +
                gutil.colors.cyan('Browserify') + "' " +
                gutil.colors.black(msg));
        });
    }

    return rebundle();
}

gulp.task('css', function() {
    // Error Handler for sass compilation.
    // Emits 'end' on sass compilation error to prevent crashing
    var onError = function(err) {
        gutil.log(gutil.colors.red(err.message));
        this.emit('end');
    };

    // this tells gulp which scss file to use as the entry point
    // for css compilation. this file should import rollup scss
    // files as well as your own partial scss files
    return gulp.src('app/static/src/scss/main.scss')
    // this initializes file mapping for sourcemap generation
        .pipe(sourcemaps.init())
        // scss compiled into css using node-sass
        .pipe(sass({
            importer: moduleImporter()
        }))
        .on('error', onError)
        .pipe(autoprefixer({
            browsers: ['> 5%'],
            cascade: false
        }))
        // this writes the sourcemaps inline
        .pipe(sourcemaps.write())
        // tells gulp where the compiled CSS should go in your project
        .pipe(gulp.dest(buildDir))
});

gulp.task('lint', function () {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(['app/static/src/js/**/*.js', 'app/ static/src/js/**/*.jsx'])
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
});
