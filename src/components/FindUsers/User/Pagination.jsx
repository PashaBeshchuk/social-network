import css from "./../FindUsers.module.css"
import React, { Component, useState, useEffect } from "react"

export const Pagination = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pagination = []
    const [startPages, setStartPages] = useState(1)
    
    for ( let i = 0; i <= pagesCount; i++ ){
        pagination.push(i)
    }

    let leftLastNumber = (startPages - 1) *  props.pageSize + 1
    let rightLastNumber = startPages  *  props.pageSize
    const actualPages = pagination.filter( (element)=> { return element >= leftLastNumber && element <= rightLastNumber} )
    let listPages = actualPages.map((item, key)=>{
        return <span key={key}>{item}</span>
    })
    return <div>
        {startPages > 1 &&  <button onClick={()=>setStartPages(startPages-1)}>past</button>}
        {listPages}
        <button onClick={()=>setStartPages(startPages+1)}>next</button>
    </div>
       
}

