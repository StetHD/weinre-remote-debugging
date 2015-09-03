import gulp from 'gulp';
import gutil from 'gulp-util';
import weinre from 'gulp-weinre';
import httpProxy from 'http-proxy';
import yargs from 'yargs';

let argv = yargs.argv;

gulp.task('default', ['remote']);

gulp.task('remote', () => {
  
  weinre({
    boundHost: argv.host || '-all-',
    httpPort: argv.port || 9090
  });

});
