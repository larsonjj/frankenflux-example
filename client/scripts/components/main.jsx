/**
*   Main Component Description
*/

'use strict';

var React = require('react');
var AppDispatcher = require('../dispatcher');
var TestModel = require('../models/test');

var MainComponent = React.createClass({
    // Use model mixin to setup event listeners
    mixins: [TestModel.mixin],
    getInitialState: function() {
        return {
            inputText: ''
        };
    },
    handleTextUpdate: function(e) {
        var value = e.currentTarget.value;
        AppDispatcher.dispatch({
            actionType: 'text-update',
            inputText: value
        });
    },
    render: function() {
        var inputText = this.state.inputText;
        return (
            <div>
                <div className="main-container">
                    <h1>React + Backbone + Flux Dispatcher Example</h1>
                    <p>
                        Start typing below to see some data-binding magic.
                    </p>
                    <p>
                        <input type="text" onChange={this.handleTextUpdate} />
                    </p>
                    <p>
                        {inputText}
                    </p>
                </div>
            </div>
        );
    },
    // Defined in TestModel.mixin
    _onChange: function() {
        console.log('testing');
        this.setState({
            inputText: TestModel.get('inputText')
        });
    }

});

module.exports = MainComponent;
