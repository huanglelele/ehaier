var gulp = require("gulp");
// var concat = require("gulp-concat");
// var uglify = require("gulp-uglify");
// var rename = require("gulp-rename");
// var connect = require("gulp-connect");
var sass = require("gulp-sass");



gulp.task("sasss",function(){
	gulp.src(["scss/index.scss"])
	.pipe(sass())
	.pipe(gulp.dest("F:\\ehaier02\\css"));
});


gulp.task("copyfile",function(){
	gulp.src("index.html").pipe(gulp.dest("F:\\ehaier02"));
});



gulp.task("images",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("F:\\ehaier02\\img"));
});


gulp.task("scssss",function(){
	gulp.src("scss/**/*")
	.pipe(gulp.dest("F:\\ehaier02\\css"));
});



gulp.task("js",function(){
	gulp.src("js/**/*")
	.pipe(gulp.dest("F:\\ehaier02\\js"));
});




gulp.task("watchall",function(){
	gulp.watch("scss/index.scss",["sasss"]);
	gulp.watch("index.html",["copyfile"]);
	gulp.watch("img/**/*",["images"]);
	gulp.watch("js/**/*",["js"]);
	gulp.watch("scss/**/*",["scssss"]);
});