import gulp from 'gulp';
import gutil from 'gulp-util';
import weinre from 'gulp-weinre';
import yargs from 'yargs';

let argv = yargs.argv;

gulp.task('default', ['remote']);

gulp.task('remote', () => {
  let ip = require('ip');

  weinre({
    boundHost: argv.host || ip.address(),
    httpPort: argv.port || 9090
  });

});