import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import sitebarReducer from "./sitebarReduser"
import findUsersRedusers from "./findUsersReduser";
import authReduser from "./authReduser";
import toDoListReducer from "./toDoListReducer";
import reduxThunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sitebarPage: sitebarReducer,
    findUsersPage: findUsersRedusers,
    auth: authReduser,
    form: formReducer,
    appInit: appReducer,
	calendar: toDoListReducer
	
})

let store = createStore(reducers, applyMiddleware(reduxThunk))

export default store