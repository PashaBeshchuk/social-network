import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, editStatus, setNewProfileInfo, saveNewPhoto, setEditingMode } from "./../../redux/profileReducer"
import { withRouter } from "react-router-dom"
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {

    updateProfile(){
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
     
    componentDidMount() {
        this.updateProfile()
   
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.updateProfile()
        }

    }

    render() {
        return <Profile 
            {...this.props} 
            profile={this.props.profile}
            bossProfile={!this.props.match.params.userId}  
            saveNewPhoto={this.props.saveNewPhoto}
            setEditingMode={this.props.setEditingMode}
        />
    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        editingMode: state.profilePage.editingMode,
        status:state.profilePage.status,
        idUser:state.auth.userId
    }
}

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, editStatus, setNewProfileInfo, saveNewPhoto, setEditingMode }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
