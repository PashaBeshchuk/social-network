import React, { Component } from "react"
import css from "./../Dialogs.module.css"

class Message extends React.Component{
    constructor(props){
        super(props)  
    }
    render(){
        return <div className={css.message}>{this.props.message}</div>
    }
}

export default Message;