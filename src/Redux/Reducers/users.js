import {CREATE_USER} from "../Actions"

const initialState = []

export default (state =initialState, action) => {
    switch (action.type) {
       case CREATE_USER:
        let user={
             id:action.id,
             name:action.name,
             desc:action.desc
        }
        state=[...state,{user}]
        return state
    default:
        return state
    }
}
