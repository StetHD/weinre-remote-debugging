import gulp from 'gulp';
import gutil from 'gulp-util';
import weinre from 'gulp-weinre';
import httpProxy from 'http-proxy';

gulp.task('hello', () => { gutil.log('hello'); });

gulp.task('default', ['remote']);

gulp.task('remote', () => {
  
  // let proxy = httpProxy.createProxyServer({target:'http://localhost:9000'})
  // .listen(8000);

  weinre({
      boundHost: '-all-',
      httpPort: 9090
    });
});


/*
 * Bookmarklet:
 *
 * javascript:(function(t,n,e,c,i){e=t[c](e),e.src="https://192.168.71.19:9090/target/target-script-min.js#anonymous",t[n][i](e)}(document,"body","script","createElement","appendChild"))
 */


