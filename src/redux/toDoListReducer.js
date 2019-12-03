const UPDATE_LIST_TO_DOS = "UPDATE_LIST_TO_DOS"
// В обьекте listToDos номерация месяца начинается с нуля
let day = new Date()
const initState = {
    listToDos:{},
}

const toDoListReducer = (state = initState, action) => {
  switch(action.type){
    case UPDATE_LIST_TO_DOS:
      return {
        ...state,
        listToDos:action.listToDos
      }
    default:
      return state
  }
}

export const updateListToDosAC = (listToDos) => ({ type: UPDATE_LIST_TO_DOS, listToDos })


export default toDoListReducer