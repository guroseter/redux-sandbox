import React from 'react';
import Contract from './Contract.jsx';

module.exports = React.createClass({

    render: function() {
        var contractList = this.props.person.contracts.map(function(c){
            return (<li>
                <Contract contract = {c} ></Contract>
            </li>
            );
        }.bind(this));
        return <div>
            <h2 className="heading"> Du har {this.props.person.contracts.length} kontrakter klar til signering </h2>
            <ul> {contractList} </ul>
        </div>
    }
});