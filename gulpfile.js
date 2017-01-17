var gulp = require("gulp");
var sass = require("gulp-sass");
var htmlmin = require('gulp-htmlmin');

gulp.task("move-css", function(){
	return gulp.src("./source/scss/*.scss")
			.pipe(sass())
			.pipe(gulp.dest("./dist/css"))
});



gulp.task("assiste", function(){
	gulp.watch("./source/scss/*.scss",["mover-css"])
	gulp.watch("./source/*.html",["minify"]);
});


gulp.task('minifica', function() {
  return gulp.src('./source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'));
});