import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { fetchContractsForUser } from '../actions/user';
import PersonLoggedIn from '../components/PersonLoggedIn.jsx';
import Contracts from '../components/Contracts.jsx';

function loadData(props) {
    const { fnr } = props.user;
    props.fetchContractsForUser(fnr);
}

class UserPage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        loadData(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.fnr !== this.props.fnr){
            loadData(nextProps);
        }
    }

    render() {
        const {user} = this.props;

        const {contracts} = this.props;
        return (<div className="box box-wide box-gray float-left">
                    <PersonLoggedIn key = {user.fnr} user = {user}/>
                    <Contracts {...contracts}/>
                </div>);
    }
}

UserPage.propTypes = {
    user: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    const user = state.user;
    const {fnr} = ownProps.params;
    const contracts = state.contractsForUser;

    return {
        user,
        fnr,
        contracts
    }
}

export default connect(
    mapStateToProps,
    { fetchContractsForUser }
)(UserPage);