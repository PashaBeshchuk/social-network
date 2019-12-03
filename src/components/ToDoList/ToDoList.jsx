import React, { Component } from "react"
import Calendar from "./ToDoOranizer/Calendar"


const ToDoList = (props) => {
    return <div>
        <Calendar {...props} />
    </div>
}

export default ToDoList
