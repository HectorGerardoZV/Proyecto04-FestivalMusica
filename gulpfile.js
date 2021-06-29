const { src, dest, series, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const imagemin = require("gulp-imagemin");
const notify = require("gulp-notify");
const webp = require("gulp-webp");

//Compilando SASS
function css() {
    return src("./src/scss/app.scss")
        .pipe(sass())
        .pipe(dest("./build/css"));

}

function imageMin() {
    return src("./src/img/**/*")
        .pipe(imagemin())
        .pipe(dest("./build/img"))
        .pipe(notify({ message: "Imagen Minificada" }));
}

function imageWebp() {
    return src("./src/img/**/*")
        .pipe(webp())
        .pipe(dest("./build/img"))
        .pipe(notify({ message: "Imagen webp lista" }));
}

function observa() {
    watch("./src/scss/**/*.scss", css);
}

exports.default = series(css, imageMin, imageWebp, observa);