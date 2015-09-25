import React from 'react';
module.exports = React.createClass({

    render: function() {
        return <button className="button float-right" onClick={() => this.props.logOut()}>Logg ut</button>
    }
});