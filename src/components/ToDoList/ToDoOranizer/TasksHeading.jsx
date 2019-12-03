import React, { Component } from "react"

class TasksHeading extends React.Component{
    constructor(){
        super()
    }
    render(){
        return<tbody>
            <tr>
                <th>Task</th>
                <th>Action</th>
            </tr>
        </tbody>
        
    }
}

export default TasksHeading