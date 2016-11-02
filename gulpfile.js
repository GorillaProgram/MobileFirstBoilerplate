const gulp = require('gulp');
const gulpUtil = require('gulp-util')
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const del = require('del');
const runSequence = require('run-sequence');
const assign = require('object-assign');

/* ========================== path end ========================== */
const reactPath = './WebComponents/';
const reactDistPath = reactPath + 'dist';
const reactImagesPath = reactPath + 'static/imgs';
const mobileFirstPath = './MobileFirstBoilerplate/apps/HybridBoilerplate/common/';
const mobileFirstDistPath = mobileFirstPath + 'dist';
const mobileFirstImagesPath = mobileFirstPath + 'static/imgs';
/* ========================== path end ========================== */

gulp.task('default', []);

/* ========================== clean start ========================== */
gulp.task('clean', () => {
    return del([reactDistPath, mobileFirstDistPath]);
});
/* ========================== clean end ========================== */

/* ========================== server start ========================== */

/* ========================== server end ========================== */

/* ========================== build start ========================== */
gulp.task('webpack_build', (callback) => {
    const webpackConf = require('./webpack.config');
    webpack(webpackConf, (err, stats) => {
        if(err) {
            throw new gulpUtil.PluginError('webpack', err);
        }
        gulpUtil.log('[webpack]', stats.toString({colors: true}));
        callback();
    })
});

gulp.task('uglify', () => {
    return gulp.src(reactDistPath + '/bundle.js')
        .pipe(uglify())
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest(reactDistPath));
});

/* 将生成的dist文件夹, 复制到MobileFirst工程中 */
gulp.task('copy', () => {
  return gulp.src(reactDistPath + '/**/*')
      .pipe(gulp.dest(mobileFirstDistPath));
});

gulp.task('copy_images', () => {
  return gulp.src(reactImagesPath + '/**/*')
      .pipe(gulp.dest(mobileFirstImagesPath));
});

gulp.task('build', (callback) => {
    runSequence(
        'clean',
        'webpack_build',
        'uglify',
        'copy_images',
        'copy',
        (error) => {
            if (error) {
                console.log(error.message);
            } else {
                console.log('build success');
            }
            callback(error);
    });
});
/* ========================== build end ========================== */
