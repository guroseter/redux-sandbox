var React = require('react');

var PersonList = require('./PersonList.jsx');
var PersonLoggedIn = require('./PersonLoggedIn.jsx');

var signeringsTeam = [
    { name: 'Rune', contracts: 2},
    { name: 'Joran', contracts: 1},
    { name: 'Guro', contracts: 3},
    { name: 'Anne Berit', contracts: 5},
    { name: 'Maruis', contracts: 1},
    { name: 'Espen', contracts: 10},
    { name: 'Sindre', contracts: 7}
];


module.exports = React.createClass({

    getInitialState: function() {
        return {
            personLoggedIn: null,
            personLoggedInName: ''
        }
    },

    handlePersonClick: function(person){
        this.setState({personLoggedIn: person});
        this.setState({personLoggedInName: person.name})
    },

    render: function() {
        var personLoggedIn = null;
        if (this.state.personLoggedIn !== null) {
            personLoggedIn = <PersonLoggedIn person = {this.state.personLoggedIn}/>
        }
        return <div>
           <h1 className= "heading heading-center heading-white"> Velkommen til signeringsportalen, {this.state.personLoggedInName} </h1>
           <div className="box box-floating box-skinny box-gray">
               <PersonList personList = {signeringsTeam} onPersonClick={this.handlePersonClick} />
           </div>
            <div className = "box box-floating box-wide box-light">
                {personLoggedIn}
            </div>
        </div>
    }

});