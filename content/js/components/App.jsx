import React, { Component, PropTypes } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { loadUserList } from '../actions/user';

import Header from './Header.jsx';
import PersonList from './PersonList.jsx';
import PersonLoggedIn from './PersonLoggedIn.jsx';
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

        const {user, userName, users, isFetching} = this.props;

        var personLoggedIn = null;
        if (user !== null) {
            personLoggedIn = <PersonLoggedIn person = {user}/>
        }
        return <div>
            <Header user={user}></Header>
           <h1 className= "heading heading-center heading-white"> Velkommen til signeringsportalen, {userName} </h1>
            <div className="box float-left box-skinny box-transparent">
                {isFetching && users.length === 0 &&
                    <h2 className="heading">Laster brukere</h2>
                }
                {users.length > 0 &&
                    <PersonList personList = {users} />
                }
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
        userName,
        users: state.users.items,
        isFetching: state.users.isFetching
    };
}

export default connect(mapStateToProps)(App);

