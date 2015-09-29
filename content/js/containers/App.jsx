import React, { Component, PropTypes } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { loadUserList } from '../actions/user';

import Header from '../components/Header.jsx';
import UserList from '../components/UserList.jsx';
import PersonLoggedIn from '../components/PersonLoggedIn.jsx';
import { fetchUserList } from '../actions/user';

const App = React.createClass({

    propTypes : {
        user: PropTypes.object.isRequired,
        fetchUserList: PropTypes.func.isRequired,
        users: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired
    },

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchUserList());
    },

    render: function() {

        const {user, userName, users, isFetching, children} = this.props;

        return <div>
            <Header user={user}></Header>
           <h1 className= "heading heading-center heading-white"> Velkommen til signeringsportalen</h1>
            <div className="box float-left box-skinny box-transparent">
                {isFetching && users.length === 0 &&
                    <h2 className="heading">Laster brukere</h2>
                }
                {users.length > 0 &&
                    <UserList personList = {users} />
                }
            </div>
            {children}
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
        userName,
        users: state.users.items,
        isFetching: state.users.isFetching
    };
}

export default connect(mapStateToProps)(App);

