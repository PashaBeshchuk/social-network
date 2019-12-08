import React from "react"
import StatusProfile from "./StatusProfile"
import profilePhoto from "./../../../image/profilePhoto.jpg"


const ProfileMyInfo = (props) => {
    return <>
        <img src={props.profile.photos.large || profilePhoto} />
        <div><button onClick={props.setEditStatus}>Edit</button></div>
        {props.bossProfile && <input type="file" onChange = {props.addNewPhotoForProfile}/>}
        < StatusProfile status={props.status} editStatus={props.editStatus} {...props}/>
        <div>Мой Id: {props.profile.userId}</div>
        <div>Про себя:
            {props.profile.aboutMe}
        </div>
        <div>Ищу работу: {props.profile.lookingForAJobDescription ? "нет" : "да"}</div>
        <div>Какую работу я ищу: {props.profile.lookingForAJobDescription}</div>
        <div>Мое имя: {props.profile.fullName}</div>
    </>
}

export default ProfileMyInfo; 