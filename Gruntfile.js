module.exports = function(grunt) {
    grunt.initConfig({
        //watch
        watch: {
            css: {
                files: ['sass/*.scss', 'sass/**/*.scss'],
                tasks: ['sass']
            },
            html: {
                files: ['*.html']
            },
            js: {
                files: ['js/*.js'],
            },
        },
        //sass
        sass: {
            build: {
                options: {
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: 'sass/',
                    src: ['*.scss'],
                    dest: 'css/',
                    ext: '.css'
                }]
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './',
                        index: 'index.html'
                    }
                }
            }
        }






    });

    // load npm tasks

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    // grunt.registerTask('default', ['browserSync','browserify', 'watch', 'jade', 'jshint']);
    grunt.registerTask('default', ['browserSync', 'watch']);
    // 給壓縮上線用 comppress task
    // grunt.registerTask('compress', ['compress']);
};
