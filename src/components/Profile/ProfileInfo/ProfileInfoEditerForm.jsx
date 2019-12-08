import React from "react"
import { createNewForm, Textarea, Input  } from "./../../Common/FormsControl/FormsControl"
import { reduxForm } from 'redux-form'
import profilePhoto from "./../../../image/profilePhoto.jpg"

const ProfileInfoEditer = (props) => {
    return <form onSubmit={props.handleSubmit}>
       <img src={props.profile.photos.large || profilePhoto} />
       <div><button>save</button></div>
       { !!props.error && <div>{props.error}</div>}
       <div>Про себя:
            {createNewForm ("aboutMe", Textarea ,"Про себя")}
        </div>
        <div>Ищу работу:
            {createNewForm ("lookingForAJob", "input",null, null, {type:"checkbox"})}
        </div>
        <div>Какую работу я ищу:
            {createNewForm ("lookingForAJobDescription", Textarea, "Какую работу я ищу")}
        </div>
        <div>Мое имя: {createNewForm ("fullName", Input, "Мое имя")}</div>        
        <div>
            <b>Контакты</b>
            {Object.keys(props.profile.contacts).map((elem, key)=>{
                return <div key={key}>
                    {createNewForm (`contacts.${elem}`, Input, elem)}
                </div>
            })}
        </div>
        
    </form>
}

const ProfileInfoEditerForm = reduxForm ({
    form:"ProfileInfoEditerForm"
})(ProfileInfoEditer)

export default ProfileInfoEditerForm
