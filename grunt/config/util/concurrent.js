/**
 * Configuration for concurrent task(s)
 */
'use strict';

var taskConfig = function(grunt) {

    grunt.config.set('concurrent', {
        images: [
            'pngmin:dist',
            'imagemin:dist',
            'svgmin:dist'
        ],
        compile: [
            'sass:dist',
            'browserify:dist'
        ],
    });

};

module.exports = taskConfig;
