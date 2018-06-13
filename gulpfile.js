var gulp = require("gulp");
// var concat = require("gulp-concat");
// var uglify = require("gulp-uglify");
// var rename = require("gulp-rename");
// var connect = require("gulp-connect");
var sass = require("gulp-sass");



gulp.task("suoyouscss",function(){
	gulp.src(["scss/**/*"])
	.pipe(sass())
	.pipe(gulp.dest("D:\\php\\WWW\\ehaier02\\css"));
});
// gulp.task("sasss",function(){
// 	gulp.src(["scss/index.scss"])
// 	.pipe(sass())
// 	.pipe(gulp.dest("D:\\php\\WWW\\ehaier02\\css"));
// });
// gulp.task("dengluscss",function(){
// 	gulp.src(["scss/denglu.scss"])
// 	.pipe(sass())
// 	.pipe(gulp.dest("D:\\php\\WWW\\ehaier02\\css"));
// });
// gulp.task("zhucescss",function(){
// 	gulp.src(["scss/zhuce.scss"])
// 	.pipe(sass())
// 	.pipe(gulp.dest("D:\\php\\WWW\\ehaier02\\css"));
// });
// gulp.task("shangpinliebiaoscss",function(){
// 	gulp.src(["scss/goodslist.scss"])
// 	.pipe(sass())
// 	.pipe(gulp.dest("D:\\php\\WWW\\ehaier02\\css"));
// });



gulp.task("copyfile",function(){
	gulp.src("index.html").pipe(gulp.dest("D:\\php\\WWW\\ehaier02"));
});
gulp.task("copyhtml",function(){
	gulp.src("denglu.html").pipe(gulp.dest("D:\\php\\WWW\\ehaier02"));
});
gulp.task("zhucehtml",function(){
	gulp.src("zhuce.html").pipe(gulp.dest("D:\\php\\WWW\\ehaier02"));
});
gulp.task("shangpinliebiaohtml",function(){
	gulp.src("goodslist.html").pipe(gulp.dest("D:\\php\\WWW\\ehaier02"));
});




gulp.task("dengluphp",function(){
	gulp.src("denglu.php").pipe(gulp.dest("D:\\php\\WWW\\ehaier02"));
});
gulp.task("zhucephp",function(){
	gulp.src("zhuce.php").pipe(gulp.dest("D:\\php\\WWW\\ehaier02"));
});




gulp.task("images",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:\\php\\WWW\\ehaier02\\img"));
});





gulp.task("js",function(){
	gulp.src("js/**/*")
	.pipe(gulp.dest("D:\\php\\WWW\\ehaier02\\js"));
});




gulp.task("watchall",function(){
	gulp.watch("scss/**/*",["suoyouscss"]);
	gulp.watch("scss/index.scss",["sasss"]);
	gulp.watch("scss/denglu.scss",["dengluscss"]);
	gulp.watch("index.html",["copyfile"]);
	gulp.watch("denglu.html",["copyhtml"]);
	gulp.watch("img/**/*",["images"]);
	gulp.watch("js/**/*",["js"]);
	gulp.watch("zhuce.html",["zhucehtml"]);
	gulp.watch("scss/zhuce.scss",["zhucescss"]);
	gulp.watch("denglu.php",["dengluphp"]);
	gulp.watch("zhuce.php",["zhucephp"]);
	gulp.watch("goodslist.html",["shangpinliebiaohtml"]);
	gulp.watch("goodslist.scss",["shangpinliebiaoscss"]);
});