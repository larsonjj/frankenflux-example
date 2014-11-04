/**
 * Configuration for copy task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('copy', {
        server: {
            files: [{
                expand: true,
                cwd: '<%= yeogurt.client %>/',
                dest: '<%= yeogurt.staticServer %>/',
                src: [
                    'scripts/**/*.js',
                    '!scripts/app.js',
                    '!scripts/main.js',
                    'bower_components/**/*.{js,map,css,woff,otf,ttf,eot,svg}',
                    'styles/**/*.css',
                    'images/**',
                    '*.{ico,png,txt}',
                    'styles/fonts/**/*.{woff,otf,ttf,eot,svg}',
                    '*.html'
                ]
            }]
        },
        dist: {
            files: [{
                expand: true,
                cwd: '<%= yeogurt.client %>/',
                dest: '<%= yeogurt.dist %>/',
                src: [
                    'bower_components/modernizr/modernizr.js',
                    'bower_components/**/*.{woff,otf,ttf,eot,svg}',
                    '*.html',
                    '!*.js',
                    '*.{ico,png,txt}',
                    'images/**/*.{webp}',
                    'styles/fonts/**/*.{woff,otf,ttf,eot,svg}'
                ]
            }]
        }
    });

};

module.exports = taskConfig;
