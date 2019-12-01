import React, { Component } from 'react';
import MyPostsConteiner from "./MyPosts/MyPostsConteiner"
import ProfileInfo from './ProfileInfo/ProfileInfo';

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <ProfileInfo profile={this.props.profile} status={this.props.status} editStatus={this.props.editStatus}/>
                <MyPostsConteiner />
            </div>
        )
    }
}
export default Profile