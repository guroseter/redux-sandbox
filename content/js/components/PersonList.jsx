var React = require('react');

var Person = require('./PersonListElement.jsx');


module.exports = React.createClass({

    handlePersonClick: function(person) {
        this.props.onPersonClick(person);
    },

    render: function() {

        var personListOut = this.props.personList.map(function(p){
            return (<li className = "list-no-style">
                <Person person = {p} onPersonClick = {this.handlePersonClick} ></Person>
            </li>
            );
        }.bind(this));

        return <ul>
                {personListOut}
            </ul>
    }
});