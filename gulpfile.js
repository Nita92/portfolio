var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    cssnano = require("gulp-cssnano"),
    rename = require("gulp-rename"),
    concat = require("gulp-concat"),
    notify = require("gulp-notify"),
    del = require("del"),
    plumber = require("gulp-plumber"),
    browserSync = require("browser-sync");

gulp.task("styles", function() {
    return gulp.src("scss/main.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(plumber())
        .pipe(cssnano())
        .pipe(gulp.dest("css/"));
});

gulp.task("browser-sync", function() {
    browserSync.init([ "css/*.css", "js/*.js", "*.html" ], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("watch", [ "browser-sync" ], function() {
    gulp.watch("scss/*.scss", [ "styles" ]);
    gulp.watch("./*.html");
});

gulp.task("default", [ "watch" ]);
