import React from 'react';
module.exports = React.createClass({

    render: function() {

        const contracts = this.props.items;

        var renderContracts = contracts.map(function(c){
            return (<li className = "list-no-style">
                <p>Emne: {c.emne} </p>
                <p>Avsender: {c.avsender} </p>
            </li>
            );
        }.bind(this));
        return <div>
            Dine kontrakter:
            {renderContracts}
        </div>
    }

});