import React from 'react';

module.exports = React.createClass({

    render: function() {
        return <div>
            <h2 className="heading">Du er logget inn, {this.props.user.fornavn}</h2>
            </div>
    }
});