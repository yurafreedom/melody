module.exports = function() {
	$.gulp.task('svg', () => {
		return $.gulp.src('src/static/img/*.svg')
			// .pipe($.gp.svgmin({
			// 	js2svg: {
			// 		pretty: true
			// 	}
			// }))
			.pipe($.gp.cheerio({
				run: function($) {
					$('fill').removeAttr('fill');
					$('stroke').removeAttr('stroke');
					$('<style></style>').removeAttr('style');
				},
				parserOptions: { xmlMode: true }
			}))
			.pipe($.gp.replace('&qt;', '>'))
			.pipe($.gp.svgSprite({
				mode: {
					symbol: {
						sprite: "sprite.svg"
					}
				}
			}))
			.pipe($.gulp.dest('./build/static/img/svg'));
	});
};