import React, { Component } from "react"

class FieldForCalendar extends React.Component {
    constructor(){
        super()
        this.daysOfTheWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
        this.field=[]
        this.daysIsThisMonth = false
    }
    buildFild(){
        this.field = []
        let daysForWeek = this.daysOfTheWeek.length
        let weeks = Math.ceil(this.props.DaysForMonth/daysForWeek)
        let numbersDay = 1
        for(let i = 0; i <= weeks; i++){
            this.field.push([])
            for(let j = 0; j < daysForWeek; j++){
                this.firstDayInMonth(j, numbersDay)
                if(!this.daysIsThisMonth){
                    this.field[i].push({number:"", state:false})
                    if(numbersDay > this.props.DaysForMonth){
                        if(this.field[i][0].state === false){
                            this.field.splice(i,1)
                            break
                        }
                    }
                }else{
                    this.field[i].push({number:numbersDay, state:true})
                    numbersDay++
                }
            }
        }
    }
    firstDayInMonth(number, numbersDay){
        if(this.props.nameDay === this.daysOfTheWeek[number]){
            this.daysIsThisMonth = true
        }
        if(numbersDay > this.props.DaysForMonth){
            this.daysIsThisMonth = false
        }
    }				
    render(){
        this.buildFild()
        let listField = this.field.map((item,index)=>{
            let listFieldInField = item.map((item,index)=>{
                if(item.state === false){
                    return <td key = {index}>{item.number}</td>
                }else{
                    let idForDay = item.number + "." + this.props.numberMoth + "." + this.props.showYear
                    return <td key = {index}  id = {idForDay} onClick = {this.props.listAffairs.bind(this)}>{item.number}</td>
                }
            })
            return <tbody key = {index}><tr key = {index}>{listFieldInField}</tr></tbody>
        })
        let listDay = this.daysOfTheWeek.map((item, index)=>{
            return <th key = {index}>{item}</th>
        })
        return<table>
            <tbody>
                <tr>
                    {listDay}
                </tr>
            </tbody>
            {listField}
        </table>
    }
}

export default FieldForCalendar