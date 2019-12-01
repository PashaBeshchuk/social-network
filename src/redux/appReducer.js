import { getAuthUserData } from "./authReduser"

const SET_COMPONENT_INITIALIZATION = "SET-COMPONENT-INITIALIZATION"

let initialState = {
    componentInitialization: false
}
const setComponentInit = (state) => {
    return {
        ...state,
        componentInitialization:true
    }
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMPONENT_INITIALIZATION:
            return setComponentInit(state)
        default:
            return state
    }
}

const setComponentInitialization = () => ({ type: SET_COMPONENT_INITIALIZATION })

export const initAllComponent = () => {
    return (dispatch) => {
        let status = dispatch(getAuthUserData())
        Promise.all([status]).then(()=>{
            dispatch(setComponentInitialization())
        })
    }
}


export default appReducer