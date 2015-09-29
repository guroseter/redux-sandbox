import React, { Component, PropTypes } from 'react';

export default class UserListElement extends Component {
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        this.props.onClickUser(this.props.user);
    }

    render() {
        const {user} = this.props;
        return <button className = "button" onClick={this.handleOnClick}> {user.fornavn} </button>
    }
}
