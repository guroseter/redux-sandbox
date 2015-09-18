var React = require('react');

var PersonList = require('./PersonList.jsx')


var signeringsTeam = [
    { name: 'Joran', contracts: 1},
    { name: 'Guro', contracts: 3},
    { name: 'Anne Berit', contracts: 5},
];


module.exports = React.createClass({

    render: function() {
        return <div>
           <h1 className= "heading"> React i signeringsportalen </h1>
               <div>
                   <PersonList personList = {signeringsTeam}/>
               </div>
        </div>
    }

});