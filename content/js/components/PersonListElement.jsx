var React = require('react');


module.exports = React.createClass({


    handleClick: function() {
        this.props.onPersonClick(this.props.person);
    },

    render: function() {
        return <button className = "button" onClick={this.handleClick}> {this.props.person.name} </button>
    }

});