var React = require('react');

var Person = require('./Person.jsx');


module.exports = React.createClass({

    render: function() {

        var personListOut = this.props.personList.map(function(p){
            return (<li>
                <Person person = {p}></Person>
            </li>
            );
        });



        return <ul>
                {personListOut}
            </ul>
    }

});