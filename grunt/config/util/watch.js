/**
 * Configuration for watch task(s)
 */
'use strict';

var _ = require('lodash');

var taskConfig = function(grunt) {

    // Configuration
    var config = {
        configFiles: {
            files: [
                'Gruntfile.js',
                'grunt/**/*.js',
                '*.json'
            ],
            options: {
                reload: true,
                interrupt: true
            },
            tasks: [
                'serve:nowatch'
            ]
        },
        sass: {
            files: ['<%= yeogurt.client %>/styles/**/*.{scss,sass}'],
            tasks: [
                'injector:sass',
                'sass:server',
                'autoprefixer:server'
            ]
        },
        injectCss: {
            files: [
                '<%= yeogurt.client %>/styles/**/*.css'
            ],
            tasks: [
                'injector:css',
                'autoprefixer:server'
            ]
        },
        js: {
            files: [
                '<%= yeogurt.client %>/scripts/**/*.js'
            ],
            tasks: [
                'newer:jshint',
                'browserify:server',
                'exorcise:server',
                'newer:copy:server'
            ]
        },
        react: {
            files: ['<%= yeogurt.client %>/scripts/components/**/*.jsx'],
            tasks: [
                'browserify:server',
                'exorcise:server'
            ]
        },
        images: {
            files: ['<%= yeogurt.client %>/images/**/*.{png,jpg,gif}'],
            tasks: ['newer:copy:server']
        },
        root: {
            files: [
                '<%= yeogurt.client %>/*.{ico,png,txt,html}',
                '<%= yeogurt.client %>/images/**/*.webp',
                '<%= yeogurt.client %>/styles/fonts/**/*.*'
            ],
            tasks: ['newer:copy:server']
        },
        livereload: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                '<%= yeogurt.staticServer %>/*.{ico,png,txt,html}',
                '<%= yeogurt.staticServer %>/**/*.html',
                '<%= yeogurt.staticServer %>/styles/**/*.{css,ttf,otf,woff,svg,eot}',
                '<%= yeogurt.staticServer %>/scripts/**/*.js',
                '<%= yeogurt.staticServer %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }
    };


    grunt.config.set('watch', config);


};

module.exports = taskConfig;
