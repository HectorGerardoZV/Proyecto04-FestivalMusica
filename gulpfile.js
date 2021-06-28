const { src, dest, series, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));

//Compilando SASS
function css() {
    return src("./src/scss/app.scss")
        .pipe(sass())
        .pipe(dest("./build/css"));

}

function observa() {
    watch("./src/scss/**/*.scss", css);
}

exports.default = series(css, observa);