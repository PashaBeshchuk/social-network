import React, { Component } from "react"
import css from './ProfileInfo.module.css'
import StatusProfile from "./StatusProfile"


class ProfileInfo extends React.Component{
    render(){
        let myProfile = <div>
             <img src="https://pics.livejournal.com/shpilenok/pic/001p0qdt" />
            <p>Бещук Павел</p>
        </div>  
            if(this.props.profile){
                myProfile = <div>
                    <img src={this.props.profile.photos.large} />
                    < StatusProfile status={this.props.status} editStatus={this.props.editStatus}/>
                    <p>Кто я: {this.props.profile.aboutMe}</p>
                    <p>Статус работы: {this.props.profile.lookingForAJobDescription}</p>
                    <p>Id: {this.props.profile.userId}</p>
                </div>
            }
        return (
            <div className={css.avatar}>
                {myProfile}
            </div>
        )
    }
}
export default ProfileInfo; 