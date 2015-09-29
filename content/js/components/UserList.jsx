import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UserListElement from './UserListElement.jsx';
import * as UserActions from '../actions/user'


class UserList extends Component {
    constructor(props){
        super(props);
        this.handleUserClick = this.handleUserClick.bind(this);
    }

    handleUserClick(user){
        const {dispatch} = this.props;

        const actions = bindActionCreators(UserActions, dispatch);
        actions.logIn(user);

        const {history} = this.context;
        history.pushState(null, `/minside`);
    }

    render() {
        const {personList} = this.props;

        var personListOut = personList.map(function(u){
            return (<li className = "list-no-style">
                <UserListElement key={u.id} user = {u} onClickUser={this.handleUserClick}></UserListElement>
            </li>
            );
        }.bind(this));

        return (<ul>
            {personListOut}
            </ul>);
    }
};

UserList.contextTypes = {
    history: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(UserActions, dispatch);
}

export default connect(mapDispatchToProps)(UserList);