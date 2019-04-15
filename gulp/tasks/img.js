module.exports = function() {
	$.gulp.task('img:dev',function () {
		return $.gulp.src('src/static/img/*')
		  .pipe($.gulp.dest('build/static/img'));
	});

	$.gulp.task('img:build',function () {
		return $.gulp.src('src/static/img/*')
		  .pipe($.gp.tinypng('2G1nJzf47BbOrIppo4JA7gQbIFDr6S6v'))
		  .pipe($.gulp.dest('build/static/img'));
	});
}; 
