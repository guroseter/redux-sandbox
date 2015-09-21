var React = require('react');

var PersonList = require('./PersonList.jsx');
var PersonLoggedIn = require('./PersonLoggedIn.jsx');

var runeContracts = ['Eclipse Membership Contract', 'Super Expensive Hipster Coffeemaker Receipt '];
var espenContracts = ['Eiendomsmegleravtale', 'Boligkontrakt', 'Altmuligmann-kontrakt'];
var sindreContracts = ['RBK gullmedlemskap', 'SAS frequent Trondheim flyer contract'];
var joranContracts = ['RBK bronsemedlemskap', 'Krav for aktører i BEKK-ledelsen'];
var mariusContracts = ['Overtakelse av PL-rollen på Digipost Signering'];
var guroContracts = [];
var anneContracts = [];

var signeringsTeam = [
    { name: 'Rune', contracts: runeContracts},
    { name: 'Joran', contracts: joranContracts},
    { name: 'Guro', contracts: guroContracts},
    { name: 'Anne Berit', contracts: anneContracts},
    { name: 'Marius', contracts: mariusContracts},
    { name: 'Espen', contracts: espenContracts},
    { name: 'Sindre', contracts: sindreContracts}
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
           <div className="box box-floating box-skinny box-transparent">
               <PersonList personList = {signeringsTeam} onPersonClick={this.handlePersonClick} />
           </div>
            <div className = "box box-floating box-wide box-gray">
                {personLoggedIn}
            </div>
        </div>
    }

});