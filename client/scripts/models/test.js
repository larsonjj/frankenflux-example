'use strict';

var _ = require('lodash');
var AppDispatcher = require('../dispatcher');

var testModel = Backbone.Model.extend({

    initialize: function() {
        var self = this;
        
        // Register the callback function that will run when calling AppDispatcher.dispatch()
        this.dispatchToken = AppDispatcher.register(_.bind(this.dispatchCallback, this));

        // Create a mixin to pass to React components that sets up event listeners
        this.mixin = {
            componentDidMount: function() {
                self.on('change', this._onChange, this);
            },
            componentWillUnmount: function() {
                self.off('change', this._onChange, this);
            }
        };
    },

    defaults: {
        inputText: ''
    },

    dispatchCallback: function(payload) {
        switch (payload.actionType) {
            case 'text-update':
                this.set('inputText', payload.inputText);
                break;
        }
    }

});

var TestModel = new testModel();

module.exports = TestModel;
