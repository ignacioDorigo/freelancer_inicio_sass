import gulpSass from "gulp-sass";
import dartSass from "sass";
import { src, dest, watch, series } from "gulp";

const sass = gulpSass(dartSass);

export function css(done) {
  src("src/sass/app.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("build/css"));
  done();
}

export function watchFiles() {
  watch("src/sass/**/*.scss", css);
}

export default series(css, watchFiles);
