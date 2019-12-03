import React, { Component } from "react"
import css from "./TicTacToe.module.css"

class TicTacToe extends React.Component{
    constructor(){
        super()
        this.state = {
            players:{
                firstPlayer:true,
                secondPlayer:false,
            },
            firstPlayer:[],
            secondPlayer:[]
        }
    }
    render(){
        return <div>
            <Field 
                players = {this.state.players}
                firstPlayer = {this.state.firstPlayer}
                secondPlayer = {this.state.secondPlayer}
            />
        </div>
    }
}


class Field extends React.Component{
    constructor(){
        super()
        this.state = {
            winningPosition:[
                ["0","1","2"],
                ["0","3","6"],
                ["0","4","8"],
                ["3","4","5"],
                ["6","7","8"],
                ["1","4","7"],
                ["2","4","6"],
                ["2","5","8"],
            ]
        }
    }
    buildArrayField(){
        let idElementFild = 0
        let arrayField = []
        for(let i = 0; i < 3; i++){
            arrayField.push([])
            for(let j = 0; j < 3; j++){
                arrayField[i].push([<td id = {idElementFild}></td>])
                idElementFild++
            }
        }
        return arrayField
    }
    playerMove(event){
        if(event.target.innerHTML === ""){
            if(this.props.players.firstPlayer){
                event.target.innerHTML = "X"
                this.props.firstPlayer.push(event.target.id)
            }
            if(this.props.players.secondPlayer){
                event.target.innerHTML = "O"
                this.props.secondPlayer.push(event.target.id)
            }
            this.definitionPlayer()
            if(this.props.firstPlayer.length >= 3 || this.props.secondPlayer >= 3){
                this.chooseAWinner(this.props.firstPlayer, this.props.secondPlayer)
            }
        }
        
    }
    chooseAWinner(firstPlayer,secondPlayer){
        let sortPositonFirstPlayer = firstPlayer.sort()
        let sortPositonSecondPlayer = secondPlayer.sort()
        let cycleLength
        if(sortPositonFirstPlayer.length < sortPositonSecondPlayer.length){
            cycleLength = sortPositonSecondPlayer.length
        }else{
            cycleLength = sortPositonFirstPlayer.length
        }
        for(let i = 0; i < this.state.winningPosition.length; i++){
            let numberOfCoincidencesFirstPlayer = 0
            let numberOfCoincidencesSecondPlayer = 0
            for(let j = 0; j < this.state.winningPosition[i].length; j++){
                for(let k = 0; k < cycleLength; k++){
                    if(sortPositonFirstPlayer[k] === this.state.winningPosition[i][j]){
                        numberOfCoincidencesFirstPlayer++
                        if(numberOfCoincidencesFirstPlayer === 3){
                            setTimeout(this.sayWhoWin, 100, "First Player Win")
                            setTimeout(this.windowReload,100)
                        }
                    }
                    if(sortPositonSecondPlayer[k] === this.state.winningPosition[i][j]){
                        numberOfCoincidencesSecondPlayer++
                        if(numberOfCoincidencesSecondPlayer === 3){
                            setTimeout(this.sayWhoWin, 100, "Second Player Win")
                            setTimeout(this.windowReload,100)
                        }
                    }
                    
                }
                
            }
            
        }
    }
    sayWhoWin(player){
        alert(player)
    }
    windowReload(){
        window.location.reload();
    }
    definitionPlayer(){
        this.props.players.firstPlayer = !this.props.players.firstPlayer
        this.props.players.secondPlayer = !this.props.players.secondPlayer
        this.setState({players:this.props.players})
    }
    render(){
        let visualField = this.buildArrayField().map((item, index)=>{
                let elementForField = item.map((element, index)=>{
                    return element
                })
            return <tr key = {index}>{elementForField}</tr>
        })
        return <div>
            <table cellSpacing = "0">
                <tbody onClick = {this.playerMove.bind(this)}>
                    {visualField}
                </tbody>
            </table>
        </div>
    }
}

export default TicTacToe