import React, { Component } from "react"
import css from "./Calendar.module.css"
import FieldForCalendar from "./FieldForCalendar"
import Todo from "./Todo"
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
            dateOfTheDayForTask,
            dispayFitelCalendar:true
        }
    }
    componentDidMount(){
		console.log(this.props)
		debugger
        this.state.listToDos = {...this.props.state.listToDos}
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
        this.props.updateListToDosAC(this.state.listToDos)
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


export default Calendar