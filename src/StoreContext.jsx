import React from "react"
let StoreContext = React.createContext(null)
export let Provider =(props)=>{
    return  <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext