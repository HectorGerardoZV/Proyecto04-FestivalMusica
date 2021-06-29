const { src, dest, series, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const imagemin = require("gulp-imagemin");

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
}

function observa() {
    watch("./src/scss/**/*.scss", css);
}

exports.default = series(css, observa);
//exports.imageMin = imageMin;