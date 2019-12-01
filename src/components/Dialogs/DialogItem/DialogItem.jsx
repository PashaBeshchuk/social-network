import React, { Component } from "react"
import css from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom"

class DialogItem extends React.Component{
    constructor(props){
        super(props)
        this.path = "/dialogs/"+ this.props.id
    }
    render(){
        return (
            <div className={`${css.dialog} ${css.active}`}>
                <div><img src={this.props.imgURL} /></div>
                <NavLink to={this.path}>{this.props.name}</NavLink>
            </div>
        )
    }
}

export default DialogItem;