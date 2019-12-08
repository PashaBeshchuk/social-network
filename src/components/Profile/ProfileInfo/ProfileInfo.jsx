import React, { Component } from "react"
import css from './ProfileInfo.module.css'
import ProfileInfoEditerForm from "./ProfileInfoEditerForm"
import ProfileMyInfo from "./ProfileMyInfo"

class ProfileInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editStatus:false
        }
    }
    
    onSubmit(formData){
        this.props.setNewProfileInfo(formData)
    }

    addNewPhotoForProfile(event){
        if(event.target.files.length){
            this.props.saveNewPhoto(event.target.files[0])
        }
    }
    setEditStatus(){
        this.setState({editStatus:!this.state.editStatus})
        this.props.setEditingMode(true)
    }
    render(){
        let myProfile = <div>
            <img src="https://pics.livejournal.com/shpilenok/pic/001p0qdt" />
            <p>Бещук Павел</p>
        </div>  
            if(this.props.profile){
                myProfile = <div>
                    {this.props.editingMode ? <ProfileInfoEditerForm initialValues={this.props.profile} onSubmit={this.onSubmit.bind(this)} profile={this.props.profile} setEditStatus={this.setEditStatus.bind(this)}/>: 
                    <>
                        < ProfileMyInfo 
                            profile={this.props.profile} 
                            status={this.props.status} 
                            editStatus={this.props.editStatus} 
                            bossProfile={this.props.bossProfile}
                            setEditStatus={this.setEditStatus.bind(this)}
                            addNewPhotoForProfile={this.addNewPhotoForProfile.bind(this)}
                        />
                        <div>
                            <b>Контакты</b>
                            {Object.keys(this.props.profile.contacts).map((elem, key)=>{
                                return <div key={key}>
                                    <ProfileMyContacts title={elem} contacts={this.props.profile.contacts[elem]}/>
                                </div>
                            })}
                        </div>
                    </>
                    }
                </div>
            }
        return (
            <div className={css.avatar}>
                {myProfile}
            </div>
        )
    }
}

const ProfileMyContacts = (props) =>{
    let contacts = !props.contacts ? "" : props.contacts
    return `${props.title} : ${contacts}`
}

export default ProfileInfo; 