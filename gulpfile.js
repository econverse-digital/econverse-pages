import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import rename from 'gulp-rename';

const sass = gulpSass(dartSass);

// Caminhos dos arquivos
const paths = {
  scss: 'src/assets/styles/**/*.scss', // Pega todos os arquivos SCSS na pasta src/assets/style
  cssDest: 'css', // Salva os arquivos compilados na pasta css
};

// Tarefa para compilar e minificar SCSS
gulp.task('sass', function () {
  return gulp.src(paths.scss) // Pega todos os arquivos SCSS
    .pipe(sass().on('error', sass.logError)) // Compila SCSS para CSS
    .pipe(cleanCss()) // Minifica o CSS
    .pipe(gulp.dest(paths.cssDest)); // Salva na pasta css
});

// Tarefa para observar mudanças nos arquivos SCSS
gulp.task('watch', function () {
  gulp.watch(paths.scss, gulp.series('sass')); // Observa os arquivos SCSS e executa a tarefa 'sass'
});

// Tarefa padrão para rodar compilação e observação
gulp.task('default', gulp.series('sass', 'watch'));
