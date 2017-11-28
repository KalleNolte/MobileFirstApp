var gulp = require("gulp"),
    watch = require("gulp-watch")

gulp.task("default", () => {
    console.log("Default gulp task")
})

gulp.task("html", () => {
    console.log("Something to do with html")
})

gulp.task("styles", () => {
    console.log("Something to do with css")
})

gulp.task("watch", () => {
    watch("./app/index.html", () => {
        gulp.start("html")
    })
    watch("./app/assets/styles/**/*.css", () => {
        gulp.start("styles")
    })
})