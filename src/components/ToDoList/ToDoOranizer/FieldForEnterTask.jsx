import React, { Component } from "react"
import css from "./Calendar.module.css"


class FieldForEnterTask extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <form>
            <input id = "fieldEnter" onChange = {this.props.newTask}/>
            <button onClick = {this.props.createTask}>Create</button>
        </form>
    }
}
			


export default FieldForEnterTask