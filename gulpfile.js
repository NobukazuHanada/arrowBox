var gulp = require('gulp');
var elm  = require('gulp-elm');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var plumber = require("gulp-plumber");
var browserSync = require("browser-sync").create();

gulp.task('elm-init', elm.init);

gulp.task('elm', ['elm-init'], function(){
    return gulp.src('src/Main.elm')
        .pipe(plumber())
        .pipe(elm())
        .pipe(rename("main.js"))
        .pipe(gulp.dest('bin/'))
        .pipe(uglify())
        .pipe(rename("main.min.js"))
        .pipe(gulp.dest("bin/"));
});

gulp.task("bs",function(){
    browserSync.init({
        server : {
            baseDir : "bin/"
        }
    });
});

gulp.task("reload",function(){
    browserSync.reload();
});

gulp.task("default",["bs"], function(){
    gulp.watch("src/**/*.elm",["elm"]);
    gulp.watch("bin/*",["reload"]);
});
