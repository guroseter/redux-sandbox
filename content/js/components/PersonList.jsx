var React = require('react');
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PersonListElement from './PersonListElement.jsx';
import * as UserActions from '../actions/user'


const PersonList = React.createClass({


    render: function() {
        const {personList, dispatch} = this.props;
        const actions = bindActionCreators(UserActions, dispatch);

        var personListOut = personList.map(function(p){
            return (<li className = "list-no-style">
                <PersonListElement key={p.id} person = {p} logIn={actions.logIn}></PersonListElement>
            </li>
            );
        }.bind(this));

        return <ul>
                {personListOut}
            </ul>
    }
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(UserActions, dispatch);
}

export default connect(mapDispatchToProps)(PersonList);