import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';

const sass = gulpSass(dartSass);


const paths = {
  scss: 'src/assets/styles/**/*.scss', 
  cssDest: 'css', 
};

gulp.task('sass', function () {
  return gulp.src(paths.scss) 
    .pipe(sass().on('error', sass.logError)) 
    .pipe(cleanCss()) 
    .pipe(gulp.dest(paths.cssDest)); 
});


gulp.task('watch', function () {
  gulp.watch(paths.scss, gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));

