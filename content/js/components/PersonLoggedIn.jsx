var React = require('react');


module.exports = React.createClass({

    render: function() {
        return <div>
            <h2 class="heading"> Du har {this.props.person.contracts} kontrakter klar til signering </h2>
        </div>
    }

});