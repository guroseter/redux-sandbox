import React, { Component, PropTypes } from 'react';
import * as UserActions from '../actions/user'


module.exports = React.createClass({

    propTypes: {
        logIn: PropTypes.func.isRequired
    },

    render: function() {
        const {logIn, person} = this.props;
        return <button className = "button" onClick={() => logIn(person)}> {person.fornavn} </button>
    }
});
