var gulp    = require('gulp'),
sass        = require('gulp-sass'),
concat      = require('gulp-concat'),
sourcemaps  = require('gulp-sourcemaps'),
cleanCSS    = require('gulp-clean-css'),
fileinclude = require('gulp-file-include'),
image       = require('gulp-image');
sync        = require('browser-sync');
reload      = sync.reload;

gulp.task('serverRun', function() {
    sync.init({
        proxy: "localhost/portfolio",
        port : "3002"
    });
});

gulp.task('sass', function () {
	return gulp.src('src/sass/main.scss')
  .pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
  .pipe(cleanCSS())
  .pipe(sourcemaps.write(''))
  .pipe(gulp.dest('./assets/css'));
});

gulp.task('js', function () {
	return gulp.src([
		'bower_components/jquery/dist/jquery.min.js',
    'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
    'bower_components/owl.carousel/dist/owl.carousel.min.js',
    'bower_components/typed.js/dist/typed.min.js',
		'src/js/main.js'
	])
	.pipe(concat('main.js'))
	.pipe(gulp.dest('./assets/js/'));
});

gulp.task('fileinclude', function() {
  gulp.src('src/**/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('images', function() {
  gulp.src('src/img/*.*')
  .pipe(image())
  .pipe(gulp.dest('./assets/images/'));
});

gulp.task('fonts', function() {
  gulp.src([
  	'src/fonts/*.*',
  	'bower_components/font-awesome/fonts/*.*'
  ])
  .pipe(gulp.dest('./assets/fonts/'));
});

gulp.task('default', ['sass', 'js', 'fileinclude', 'images', 'fonts', 'serverRun'], function() {});

gulp.task('watch', ['default'], function () {
  gulp.watch('src/sass/**/*.scss', ['sass', reload]);
  gulp.watch('src/js/*.js', ['js', reload]);
  gulp.watch('src/img/*.*', ['images', reload]);
  gulp.watch('src/fonts/*.*', ['fonts', reload]);
  gulp.watch('src/**/*.html', ['fileinclude', reload]);
});