/**
*   Main Component Description
*/

'use strict';

var React = require('react');
var AppDispatcher = require('../dispatcher');
var TestStore = require('../models/test');

var MainComponent = React.createClass({
    getInitialState: function() {
        return {
            inputText: ''
        };
    },
    componentDidMount: function() {
        var self = this;
        // the Component binds to the Store's events
        TestStore.on('change', this._onChange, this);
    },
    componentWillUnmount: function() {
        // turn off all events and callbacks that have this context
        TestStore.off('change', this._onChange, this);
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
    _onChange: function() {
        this.setState({
            inputText: TestStore.get('inputText')
        });
    }

});

module.exports = MainComponent;
