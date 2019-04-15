module.exports = function() {
	$.gulp.task('pug',function () {
		return $.gulp.src('src/pug/pages/*.pug')
		.pipe($.gp.plumber())
		.pipe($.gp.pug({
			pretty:true 
		}))
		.pipe($.gulp.dest('build')) // место хранения обработаного файла 
		.on('end', $.bs.reload);
	});
}