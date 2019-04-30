
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');
    nunjucksRender = require('gulp-nunjucks-render');


var jsSources = ['scripts/*.js'],
    sassSources = ['styles/*.scss'],
    htmlSources = ['**/*.html'],
    outputDir = 'assets';


gulp.task('nunjucks', function () {
    // Gets .html and .nunjucks files in pages
    return gulp.src('pages/**/*.+(html|nunjucks)')
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['templates']
    }))
    // output files in output folder
    .pipe(gulp.dest(outputDir))
});


gulp.task('log', function () {
    gutil.log('== My Log Task ==')
});


gulp.task('copy', function (done) {
    gulp.src('index.html')
        .pipe(gulp.dest(outputDir))
    done();
});/* done() https://stackoverflow.com/questions/36897877/gulp-error-the-following-tasks-did-not-complete-did-you-forget-to-signal-async */

gulp.task('sass', function () {
    gulp.src(sassSources)
        .pipe(sass({ style: 'expanded' }))
        .on('error', gutil.log)
        .pipe(gulp.dest('assets'))
        .pipe(connect.reload())
});

gulp.task('js', function () { /*  minify all the JavaScript files using gulp-uglify plug-in, and then merge them using gulp-concat. */
    gulp.src(jsSources)
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest(outputDir))
        .pipe(connect.reload())
});

gulp.task('watch', function () {
    gulp.watch(jsSources, gulp.series('js'));
    gulp.watch(sassSources, gulp.series('sass'));
    gulp.watch(htmlSources, gulp.series('html'));
});

gulp.task('connect', function () { /* creating live reload */
    connect.server({
        root: '.',
        livereload: true
    })
});

gulp.task('html', function () {
    gulp.src(htmlSources)
        .pipe(connect.reload())
});

//gulp.task('default', gulp.series(gulp.parallel('html',  'js', 'sass', 'connect', 'watch')));

gulp.task('default', gulp.series(gulp.parallel('nunjucks', 'js', 'sass', 'connect', 'watch')));
