import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, editStatus } from "./../../redux/profileReducer"
import { withRouter } from "react-router-dom"
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.idUser
            if(!userId){
                this.props.history.push("/find-users")
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
   
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status:state.profilePage.status,
        idUser:state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, editStatus }),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)
