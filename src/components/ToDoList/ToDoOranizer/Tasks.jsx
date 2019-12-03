import React, { Component } from "react"
import css from "./Calendar.module.css"
import FieldForCalendar from "./FieldForCalendar"


class Tasks extends React.Component{
    render(){
        let listTasks
        if(!!this.props.listToDos[this.props.dateOfTheDayForTask.data]){
            listTasks = this.props.listToDos[this.props.dateOfTheDayForTask.data].map((item,index)=>{
                return <tr key = {index}>
                    {this.fieldTypeDefinition(item.task, index)}
                    {this.buttonsForTasks(index)}
                    <td><input onChange = {this.props.relevanceOfTheTask} id = {index} type = "checkbox"/></td>
                </tr>
            })
        }
        return <tbody>{listTasks}</tbody>
    }
    fieldTypeDefinition(task, index){
        if(!this.props.listToDos[this.props.dateOfTheDayForTask.data][index].edit){
            return <td className={this.props.listToDos[this.props.dateOfTheDayForTask.data][index].implemented ? css.implementTask : ""}>{task}</td>
        } else {
            return <td><input id = {index} onChange = {this.props.editTask} defaultValue = {task}/></td>
        }
    }
    buttonsForTasks(index){
        if(!this.props.listToDos[this.props.dateOfTheDayForTask.data][index].edit){
            return <td>
                <button id = {index} onClick = {this.props.changeFieldState}>Edit</button>
                <button id = {index} onClick = {this.deleteTask.bind(this)}>Delete</button>
            </td>
        }else{
            return <td>
                <button id = {index} onClick = {this.props.saveTask}>Save</button>
                <button id = {index} onClick = {this.props.changeFieldState}>Cancel</button>
            </td>
        }
    }
    deleteTask(event){
        this.props.listToDos[this.props.dateOfTheDayForTask.data].splice(event.target.id,1)
        this.setState({listToDos:this.props.listToDos})
    }
}


export default Tasks