module.exports = function() {
	$.gulp.task('sass', function () {
		return $.gulp.src('src/static/sass/**/*')
			.pipe($.gp.plumber())
		 	.pipe($.gp.sourcemaps.init())
			.pipe($.gp.sass({
				'include css':true
			}))
			.pipe($.gp.sass().on('error', $.gp.sass.logError))
			/*.pipe($.gp.autoprefixer({
				browsers: ['last 10 versions']
			}))*/
			.on("error", $.gp.notify.onError({
	        title: "style"
	    }))
			.pipe($.gp.csso())
			.pipe($.gp.sourcemaps.write())
			.pipe($.gulp.dest('build/static/css/')) // место хранения обработаного файла 
			.pipe($.bs.reload({
				stream: true
			}));
		}); 
}