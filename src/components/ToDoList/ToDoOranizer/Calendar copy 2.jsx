import React, { Component } from "react"
import css from "./Calendar.module.css"
import FieldForCalendar from "./FieldForCalendar"
let dateOfTheDayForTask = {data:""}
class Calendar extends React.Component {
    constructor(props){
        super(props)
        this.day = new Date()
        this.state = {
            namesDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            DaysForMonth:"",
            nameDay:"",
            year: this.day.getFullYear(),
            month: this.day.getMonth(),
            namesMoths:["Январь ", "Февраль ", "Март ", "Апрель ", "Май ", "Июнь ", "Июль ", "Август ", "Сентябрь ", "Октябрь ", "Ноябрь ", "Декабрь "],
            numberMoth: this.day.getMonth(),
            showYear:this.day.getFullYear(),
            listToDos:{},
            todos:[],
            dateOfTheDayForTask,
            dispayFitelCalendar:true
        }
    }
    render(){
        this.componentWillMounting()
        return <div>
            <div className = {this.state.dispayFitelCalendar ? "": css.display}>
                <button id = "0" onClick = {this.changeMonth.bind(this)}>Назад</button>
                {this.getMonthName()}
                {this.state.showYear}
                <button id = "1" onClick = {this.changeMonth.bind(this)}>Вперед</button>
                <FieldForCalendar 
                    DaysForMonth = {this.state.DaysForMonth}
                    nameDay = {this.state.nameDay}
                    namesDays = {this.state.namesDays}
                    numberMoth = {this.state.numberMoth}
                    showYear = {this.state.showYear}
                    listAffairs = {this.listAffairs.bind(this)}
                />
            </div>
            <div className = {this.state.dispayFitelCalendar ? css.display: ""}>
                <Todo 
                    dateOfTheDayForTask = {this.state.dateOfTheDayForTask}
                    listToDos = {this.state.listToDos}
                    dispayFitelCalendar = {this.state.dispayFitelCalendar}
                    hideBlock = {this.hideBlock.bind(this)}
                />
            </div>
        </div>
    }
    hideBlock(event){
        if(event && this.state.listToDos[this.state.dateOfTheDayForTask.data].length === 0){
            this.clearEmptyObject()
        }
        this.state.dispayFitelCalendar = !this.state.dispayFitelCalendar
        this.setState({dispayFitelCalendar: this.state.dispayFitelCalendar})
    }
    clearEmptyObject(){
        delete this.state.listToDos[this.state.dateOfTheDayForTask.data]
    }
    listAffairs(event){
        this.state.dateOfTheDayForTask.data = event.target.id
        if(!this.state.listToDos[event.target.id]){
            this.state.listToDos[event.target.id] = []
            this.setState({listToDos: this.state.listToDos})
        }
        this.setState({dateOfTheDayForTask: this.state.dateOfTheDayForTask})
        this.hideBlock()
    }
    daysInAMonth(){
        let date = new Date(this.state.year, this.state.month+1, 0)
        this.state.DaysForMonth = date.getDate()
        this.dayOfTheWeek()
        this.setState({DaysForMonth:this.state.DaysForMonth})
    }
    changeMonth(event){
        this.editNumberMonth(event.target.id)
        if(event.target.id === "0"){
            this.state.month--
        }
        if(event.target.id === "1"){
            this.state.month++
        }
        this.setState({month: this.state.month})
        this.getMonthName()
        this.daysInAMonth()
    }
    
    dayOfTheWeek(){
        let date = new Date(this.state.year, this.state.month, 1)
        this.state.nameDay = this.state.namesDays[date.getDay()]
        this.setState({ nameDay: this.state.nameDay })					
    }
    componentWillMounting(){
        if(this.state.DaysForMonth === ""){
            this.daysInAMonth()
        }
        if(this.state.nameDay === ""){
            this.dayOfTheWeek()
        }
    }
    editNumberMonth(id){
        let yearCounter = 0
        if(id === "0"){
            this.state.numberMoth--
        }
        if(id === "1"){
            this.state.numberMoth++
        }
        if(this.state.numberMoth < 0){
            this.state.numberMoth = 11
            yearCounter = -1
        }
        if(this.state.numberMoth > 11){
            this.state.numberMoth = 0
            yearCounter = 1
        }
        this.showYear(yearCounter)
        this.setState({numberMoth: this.state.numberMoth})
    }
    getMonthName(){
        return this.state.namesMoths[this.state.numberMoth]
    }
    showYear(yearCounter){
        this.state.showYear = this.state.showYear + yearCounter
        this.setState({showYear:this.state.showYear})
    }
}



class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            newTextForTask:""
        }
    }
    render(){
        //console.log(this.props.listToDos)
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
            <button onClick = {this.props.hideBlock.bind(this)}>Finish</button>
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

class Tasks extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let listTasks
        if(!!this.props.listToDos[this.props.dateOfTheDayForTask.data]){
            listTasks = this.props.listToDos[this.props.dateOfTheDayForTask.data].map((item,index)=>{
                return <tr key = {index}>
                    {this.fieldTypeDefinition(item.task, index)}
                    {this.buttonsForTasks(index)}
                    <td><input onChange = {this.props.relevanceOfTheTask.bind(this)} id = {index} type = "checkbox"/></td>
                </tr>
            })
        }
        return <tbody>{listTasks}</tbody>
    }
    fieldTypeDefinition(task, index){
        if(!this.props.listToDos[this.props.dateOfTheDayForTask.data][index].edit){
            return <td className={this.props.listToDos[this.props.dateOfTheDayForTask.data][index].implemented ? css.implementTask : ""}>{task}</td>
        } else {
            return <td><input id = {index} onChange = {this.props.editTask.bind(this)} defaultValue = {task}/></td>
        }
    }
    buttonsForTasks(index){
        if(!this.props.listToDos[this.props.dateOfTheDayForTask.data][index].edit){
            return <td>
                <button id = {index} onClick = {this.props.changeFieldState.bind(this)}>Edit</button>
                <button id = {index} onClick = {this.deleteTask.bind(this)}>Delete</button>
            </td>
        }else{
            return <td>
                <button id = {index} onClick = {this.props.saveTask.bind(this)}>Save</button>
                <button id = {index} onClick = {this.props.changeFieldState.bind(this)}>Cancel</button>
            </td>
        }
    }
    deleteTask(event){
        this.props.listToDos[this.props.dateOfTheDayForTask.data].splice(event.target.id,1)
        this.setState({listToDos:this.props.listToDos})
    }
}

class FieldForEnterTask extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <form>
            <input id = "fieldEnter" onChange = {this.props.newTask.bind(this)}/>
            <button onClick = {this.props.createTask.bind(this)}>Create</button>
        </form>
    }
}
			


export default Calendar