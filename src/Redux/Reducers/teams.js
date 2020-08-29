import {CREATE_TEAM} from "../Actions"

const initialState = []

let id=0;

export default (state =initialState, action) => {
    switch (action.type) {

    case CREATE_TEAM:
       let data={
            id:id=id+1,
            name:action.name,
            ttype:action.ttype,
            users:action.users
       }
       state=[...state,{data}]
       return state
   
    default:
        return state
    }
}
