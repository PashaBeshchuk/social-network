import React, { Component } from "react"
import { connect } from 'react-redux';
import ToDoList from "./ToDoList"
import { updateListToDosAC } from "./../../redux/toDoListReducer"
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


const ToDoListContainer = (props) => {
	debugger
    return <div>
        <ToDoList {...props} />
    </div>
}
let mapStateToProps = (state) => {
	debugger
    return {
        state:state.calendar
    }
}
export default withAuthRedirect(connect(mapStateToProps, {updateListToDosAC})(ToDoListContainer))

