import React, { Component, PropTypes } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as UserActions from '../actions/user';

import Header from './Header.jsx';
import PersonList from './PersonList.jsx';
import PersonLoggedIn from './PersonLoggedIn.jsx';

var runeContracts = ['Eclipse Membership Contract', 'Super Expensive Hipster Coffeemaker Receipt '];
var espenContracts = ['Eiendomsmegleravtale', 'Boligkontrakt', 'Altmuligmann-kontrakt'];
var sindreContracts = ['RBK gullmedlemskap', 'SAS frequent Trondheim flyer contract'];
var joranContracts = ['RBK bronsemedlemskap', 'Krav for aktører i BEKK-ledelsen'];
var mariusContracts = ['Overtakelse av PL-rollen på Digipost Signering'];
var guroContracts = [];
var anneContracts = [];

var signeringsTeam = [
    { name: 'Rune', contracts: runeContracts},
    { name: 'Jøran', contracts: joranContracts},
    { name: 'Guro', contracts: guroContracts},
    { name: 'Anne Berit', contracts: anneContracts},
    { name: 'Marius', contracts: mariusContracts},
    { name: 'Espen', contracts: espenContracts},
    { name: 'Sindre', contracts: sindreContracts}
];

const App = React.createClass({

    propTypes : {
        user: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    },

    render: function() {

        const {user, userName} = this.props;

        var personLoggedIn = null;
        if (user !== null) {
            personLoggedIn = <PersonLoggedIn person = {user}/>
        }
        return <div>
            <Header user={user}></Header>
           <h1 className= "heading heading-center heading-white"> Velkommen til signeringsportalen, {userName} </h1>
           <div className="box float-left box-skinny box-transparent">
               <PersonList personList = {signeringsTeam} />
           </div>
            <div className = "box float-left box-wide box-gray">
                {personLoggedIn}
            </div>
        </div>
    }
});

function mapStateToProps(state){
    var userName = '';
    if (state.user !== null) {
        userName = state.user.name;
    }
    return {
        user: state.user,
        userName
    };
}

export default connect(mapStateToProps)(App);

