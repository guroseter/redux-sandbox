import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LogOut from './LogOut.jsx';
import * as UserActions from '../actions/user';

const Header = React.createClass({

    render: function() {

        const {user, dispatch} = this.props;
        const actions = bindActionCreators(UserActions, dispatch);

        var logOutElement = null;
        if (user !== null){
            logOutElement = <LogOut logOut = {actions.logOut}/>;
        }
        return <div className="header">
            {logOutElement}
        </div>
    }
});


function mapDispatchToProps(dispatch) {
    return bindActionCreators(UserActions, dispatch);
}

export default connect(mapDispatchToProps)(Header);