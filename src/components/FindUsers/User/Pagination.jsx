import css from "./../FindUsers.module.css"
import React, { Component, useState, useEffect } from "react"

// export const Pagination = (props) => {
    
//     let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
//     let pagination = []
//     const [startPages, setStartPages] = useState(1)
    
//     for ( let i = 0; i <= pagesCount; i++ ){
//         pagination.push(i)
//     }

//     let leftLastNumber = (startPages - 1) *  props.pageSize + 1
//     let rightLastNumber = startPages  *  props.pageSize
//     const actualPages = pagination.filter( (element)=> { return element >= leftLastNumber && element <= rightLastNumber} )
//     let listPages = actualPages.map((item, key)=>{
//         return <span key={key}>{item}</span>
//     })
//     return <div>
//         {startPages > 1 &&  <button onClick={()=>setStartPages(startPages-1)}>past</button>}
//         {listPages}
//         <button onClick={()=>setStartPages(startPages+1)}>next</button>
//     </div>
       
// }


export class Pagination extends React.Component {
    constructor(props){
        super(props)
        this.pagesCount = 0
        this.pagination = []
        this.state = {
            actualPage:0
        }
    }
    nextPage(){
        if(this.pagination.length != 0){
            this.pagination = []
        }
        for(let i = 1; i <= this.props.pageSize; i++){
            this.pagination.push(this.state.actualPage+i)
            this.setState({actualPage:this.state.actualPage+i})
        }
        console.log(this.state.actualPage)
        
        console.log(this.pagination)
    }

    pastPage(){
        if(this.pagination.length != 0){
            this.pagination = []
            this.state.actualPage = this.state.actualPage - (this.props.pageSize*2)
            this.setState({actualPage:this.state.actualPage})
        }
        if(this.state.actualPage >= this.props.pageSize){
            for(let i = 1; i <= this.props.pageSize; i++){
                this.pagination.push(this.state.actualPage+i)
                this.setState({actualPage:this.state.actualPage+i})
            }
        }
            console.log(this.state.actualPage)

            console.log(this.pagination) 
        
    }
    render(){
        this.pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        
        return <div>
            <button onClick = {this.pastPage.bind(this)}>
                past
            </button>
            <button onClick = {this.nextPage.bind(this)} >
                next
            </button>
        </div>
    }
}