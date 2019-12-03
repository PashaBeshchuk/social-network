import React, { Component } from "react"
import css from "./Calendar.module.css"
import TasksHeading from "./TasksHeading"
import FieldForEnterTask from "./FieldForEnterTask"
import Tasks from "./Tasks"

class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            newTextForTask:""
        }
    }
    render(){
        return<div>
            <h1>Task for day</h1>
            <FieldForEnterTask 
                newTask = {this.newTask.bind(this)}
                createTask = {this.createTask.bind(this)}
            />
            <table>
                <TasksHeading />
                <Tasks 
                    listToDos = {this.props.listToDos}
                    dateOfTheDayForTask = {this.props.dateOfTheDayForTask}
                    relevanceOfTheTask = {this.relevanceOfTheTask.bind(this)}
                    changeFieldState = {this.changeFieldState.bind(this)}
                    saveTask = {this.saveTask.bind(this)}
                    editTask = {this.editTask.bind(this)}
                />
            </table>
            <button onClick = {this.props.hideBlock}>Finish</button>
        </div>
    }
    newTask(event){
        this.state.newTextForTask = event.target.value
    }
    createTask(event){
        event.preventDefault()
        let field = document.getElementById("fieldEnter")
        let newTask = {
            task:"",
            implemented: false,
            edit:false,
            text:""
        }
        
        if(!!this.state.newTextForTask){
            newTask.task = this.state.newTextForTask
            this.props.listToDos[this.props.dateOfTheDayForTask.data].push(newTask)
            this.state.newTextForTask = ""
            this.setState({listToDos:this.props.listToDos})
        }
        field.value = this.state.newTextForTask
    }
    relevanceOfTheTask(event){
        this.props.listToDos[this.props.dateOfTheDayForTask.data][event.target.id].implemented = !this.props.listToDos[this.props.dateOfTheDayForTask.data][event.target.id].implemented
        this.setState({listToDos:this.props.listToDos})
    }
    changeFieldState(event){
        this.props.listToDos[this.props.dateOfTheDayForTask.data][event.target.id].edit = !this.props.listToDos[this.props.dateOfTheDayForTask.data][event.target.id].edit
        this.setState({listToDos:this.props.listToDos})
    }
    saveTask(event){
        if(!!this.props.listToDos[this.props.dateOfTheDayForTask.data][event.target.id].text){
            this.props.listToDos[this.props.dateOfTheDayForTask.data][event.target.id].task = this.props.listToDos[this.props.dateOfTheDayForTask.data][event.target.id].text
            this.setState({listToDos:this.props.listToDos})
        }
        this.changeFieldState(event)
    }
    editTask(event){
        this.props.listToDos[this.props.dateOfTheDayForTask.data][event.target.id].text = event.target.value
    }
}


export default Todo