/**
*   Main Router
*/

'use strict';

var React = require('react');
var MainComponent = React.createFactory(require('./components/main.jsx'));


var MainRouter = Backbone.Router.extend({
    // Defined routes
    routes: {
        '': 'main'
    },

    main: function() {
        React.render(new MainComponent(), document.getElementById('app-wrapper'));
    }
});

module.exports = MainRouter;
