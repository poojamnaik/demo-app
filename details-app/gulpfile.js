const del = require('del');
const util = require('util');
const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.server.json');
const exec = util.promisify(require('child_process').exec);

gulp.task('clean', () => {
  return del(['dist']);
});

gulp.task('build:client', async (done) => {
  const { stdout, stderr } = await exec('ng build --prod');
  if (stderr && stderr !== '\u001b[0m\n\u001b[0m\n' && stderr !== '\n\n') {
    console.error(`Error: ${stderr}`);
    done(stderr);
  } else {
    console.info(`${stdout}`);
    done();
  }
});

gulp.task('build:server', () => {
  const tsResult = gulp.src('server/**/*.ts')
    .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.*', gulp.parallel('build:client'));
  gulp.watch('server/**/*.ts', gulp.parallel('build:server'));
});

gulp.task('build', gulp.parallel('build:client', 'build:server'));

gulp.task('default', gulp.series(
  'clean', 'build'
));
