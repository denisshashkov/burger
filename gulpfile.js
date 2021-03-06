const {src, dest, task, series, watch} = require("gulp");
const rm = require("gulp-rm");
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload =  browserSync.reload
const sassGlob = require('gulp-sass-glob');
const  gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const svgo = require("gulp-svgo");
const svgSprite = require("gulp-svg-sprite")
const gulpif = require('gulp-if');


const env = process.env.NODE_ENV;

sass.compiler = require('node-sass');

task( 'clean', () => {
  return src( 'dist/**/*', { read: false })
    .pipe( rm() )
});



task(
  "copy:html", () => {
  return src("./src/*.html").pipe(dest("dist")).pipe(reload({stream:true}));
});

task(
  "copy:image", () => {
  return src("./src/image/**").pipe(dest("dist/image")).pipe(reload({stream:true}));
});

task(
  "copy:fonts", () => {
  return src("./src/fonts/**").pipe(dest("dist/fonts")).pipe(reload({stream:true}));
});


task(
  "copy:playervideo", () => {
  return src("./src/playervideo/**").pipe(dest("dist/playervideo")).pipe(reload({stream:true}));
});

const styles = [
  "node_modules/normalize.css/normalize.css",
  "./src/css/layout/main.scss"
];

task( "styles", () => {
  return src(styles)
  .pipe(gulpif(env==='dev', sourcemaps.init()))
  .pipe(concat('main.min.scss'))
  .pipe(sassGlob())
  .pipe(sass().on('error', sass.logError))
  .pipe(gulpif(env === 'dev',
    autoprefixer({
    browsers: ["last 2 versions"],
    cascade: false
})))
  .pipe(gulpif(env === 'prod', gcmq())) 
  .pipe(gulpif(env === 'prod',cleanCSS()))
  .pipe(gulpif(env === 'dev',sourcemaps.write()))
  .pipe(dest('./dist/css/layout'))  
  .pipe(reload({stream:true}));
});


const libs = [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/mobile-detect/mobile-detect.min.js",
  "node_modules/jquery-touchswipe/jquery.touchswipe.min.js",
  "src/*.js"
]

task("scripts", () => {
  return src(libs)
  .pipe(sourcemaps.init())
  .pipe(concat('main.min.js', {newLine: ";"}))
  .pipe(babel({ presets: ['@babel/env']}))
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(dest('dist'))  
  .pipe(reload({stream:true}))
})

task("icons", () => {
  return src("image/svg/*.svg")
  .pipe(svgo({
    plugins: [
      {
        removeAttrs: { attrs: "(fill|stroke|style|width|height|data.*)"}
      }
    ]
  })
  )
  .pipe(svgSprite({
    mode: {symbol:{sprite:"../sprite.svg"}}
  }))
  .pipe(dest("dist/images/icons"));
});


task('server', () => {
  browserSync.init({
      server: {
          baseDir: "./dist"
      },
      open:true
  });
});


watch("./css/**/*.scss", series("styles"));
watch("./*.html", series ("copy:html"));
watch("scripts/*js", series ("scripts"));
task ("default", series("clean", "copy:html", "copy:fonts", "copy:image", "copy:playervideo", "styles", "scripts", "icons", "server"));