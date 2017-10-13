// Dependencies
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync');


/*
 ===== TASKS =====
 */

// Task: SASS Compiling
gulp.task('sass', function () {
    gulp.src('src/scss/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('src/css/'));
});


// Task: Browser Syncing
gulp.task('browser-sync', function () {
    browserSync.init(
        [
            'src/css/*.css',
            'src/js/*.js',
            'src/images/*',
            'src/*.html'

        ],
        {
            server: {
                baseDir: './src'
            }
        }
    );
});


// Task: Copy source to distribution directory
gulp.task('build', function () {

    // Copy HTML and assets directories
    gulp.src(['src/*', '!src/scss/'])
        .pipe(gulp.dest('dist'))

    // Copy Styles
    gulp.src('src/css/*')
        .pipe(gulp.dest('dist/css/'))

    // Copy JS
    gulp.src('src/js/*')
        .pipe(gulp.dest('dist/js/'))

    // Copy Images
    gulp.src('src/images/*')
        .pipe(gulp.dest('dist/images/'))

    // Copy Fonts
    gulp.src('src/fonts/*')
        .pipe(gulp.dest('dist/fonts/'))

});


// Task: Watch
gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch(
        [
            'src/*.html',
            'src/js/*',
            'src/images/*',
            'src/fonts/*',
            'src/css/*.css'
        ]
    );
});


// Task: DEFAULT
gulp.task('default', ['browser-sync', 'watch']);