const gulp = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');

const rev = require('gulp-rev');

const uglify = require('gulp-uglify-es').default;
const imagein = require()

gulp.task('css', function(done) {
    console.log('minifying css.... ');
    gulp.src('./assests/sass/**/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('./assests.css'))

    gulp.src('./assests/**/*.css')
        .pipe(rev())
        .pipe(gulp.dest('./public/assests'))
        .pipe(rev.manifest({
            cwd: 'public',
            merge: true
        }))
        .pipe(gulp.dest('./public/assests'));
    done();
})


gulp.task('js', function(done) {
    console.log('minifying js...');
    gulp.src('./assests/**/*.js')
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('./public/assests'))
        .pipe(rev.manifest({
            cwd: 'public',
            merge: true
        }))
        .pipe(gulp.dest('./public/assests'));
    done()

})


gulp.task('images', function(done) {
    console.log('compresing images... ');
    gulp.src('./assests/**/*.+(png|jpg|gif|svg|jpeg)')
        .pipe(imagemin())
        .pipe(rev())
        .pipe(gulp.dest('./public/assests'))
        .pipe(rev.manifest({
            cwd: 'public',
            merge: true
        }))

    .pipe(gulp.dest('./public/assests'));
    done()
})