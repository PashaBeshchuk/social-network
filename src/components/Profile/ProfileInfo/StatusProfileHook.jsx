import React, { useState, useEffect } from "react"

const StatusProfileHook = (props) => {
    let [editMode, setEditMode] = useState(true)
    let [status, setStatus] = useState(props.status)
    
    const changeEditMode = () => {
        setEditMode(!editMode)
        if (!editMode) {
            props.editStatus(status)
        }
    }
    useEffect(() => {
       if(props.status !== status){
           setStatus(props.status)
       }
    }, [props.status])

    const editTextStatus = (e) => {
        setStatus(e.target.value)
    }
    return <div>
        {
            editMode
                ? <span onClick={changeEditMode}>{!props.status ? "Введите статус" : props.status}</span>
                : <input onChange={editTextStatus} onBlur={changeEditMode} autoFocus={true} value={status} />
        }
    </div>

}

export default StatusProfileHook