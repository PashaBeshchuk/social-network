import React, { Component } from "react"
import { connect } from 'react-redux';
import ToDoList from "./ToDoList"
import { updateListToDosAC } from "./../../redux/toDoListReducer"



const ToDoListContainer = (props) => {
    return <div>
        <ToDoList {...props} />
    </div>
}
let mapStateToProps = (state) => {
    return {
        state:state.calendar
    }
}
export default connect(mapStateToProps, {updateListToDosAC})(ToDoListContainer)

