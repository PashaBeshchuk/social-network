import React, { Component } from "react"
import css from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { Field, reduxForm } from "redux-form"
import { stateField, maxWords } from "../../util/varibals/validators"
import { Input, createNewForm } from "../Common/FormsControl/FormsControl"


let maxLength10 = maxWords(10)
class Dialogs extends React.Component{
    onSubmit(massage){
        this.props.addMessage(massage)
    }
    render(){
        let dialogsElements = this.props.dialogsPage.dialogsData.map((item, index)=>{
            return < DialogItem key={index} name={item.name} id={item.id} imgURL={item.img}/>
        }) 
        let messagesElements = this.props.dialogsPage.messages.mama.map((item, index)=>{
            return  <Message key={index} message={item}/>
        })
        let myMessage = this.props.dialogsPage.messages.me.map((item, index)=>{
            return  <Message key={index} message={item.message}/>
        })
        return <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={css.messages}>  
                <div className={css.layer}>
                    {messagesElements}
                    <div className={css.me}>{myMessage}</div>
                </div>
                <ReduxFieldMessage onSubmit={this.onSubmit.bind(this)}/>
            </div>
        </div>
    }
}

let FieldMessage = (props) => {
   
    return <form onSubmit={props.handleSubmit}>
        {createNewForm("message", Input, "Enter your message", [stateField, maxLength10])}
        <button>Отправить</button>
    </form>
}


let ReduxFieldMessage = reduxForm({form:"dialogsForm"})(FieldMessage) 
export default Dialogs;