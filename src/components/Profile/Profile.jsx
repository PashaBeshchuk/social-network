import React, { Component } from 'react';
import MyPostsConteiner from "./MyPosts/MyPostsConteiner"
import ProfileInfo from './ProfileInfo/ProfileInfo';

class Profile extends React.Component {
    render() {
        return (
            <div>
                <ProfileInfo 
                    profile={this.props.profile} 
                    status={this.props.status} 
                    editStatus={this.props.editStatus} 
                    setNewProfileInfo={this.props.setNewProfileInfo}
                    bossProfile={this.props.bossProfile}
                    saveNewPhoto={this.props.saveNewPhoto}
                    setEditingMode={this.props.setEditingMode}
                    editingMode={this.props.editingMode}
                />
                <MyPostsConteiner />
            </div>
        )
    }
}
export default Profile