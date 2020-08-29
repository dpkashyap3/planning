import {SET_TEAM} from "../Actions"

const initialState = []


export default (state =initialState, action) => {
    switch (action.type) {

    case SET_TEAM:
       return action.item
   
    default:
        return state
    }
}
