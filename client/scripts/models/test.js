'use strict';

var _ = require('lodash');
var AppDispatcher = require('../dispatcher');

var testModel = Backbone.Model.extend({

    initialize: function() {
        this.dispatchToken = AppDispatcher.register(_.bind(this.dispatchCallback, this));
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

var TestStore = new testModel();

module.exports = TestStore;
