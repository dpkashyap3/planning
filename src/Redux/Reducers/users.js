import {CREATE_USER,DELETE_USER,SEARCH_USER} from "../Actions"

const initialState = []
let id=0;

export default (state =initialState, action) => {
    switch (action.type) {
       case CREATE_USER:
        state=[...state, {
            id:id=id+1,
            teamid:action.id,
            name:action.name,
            desc:action.desc
       }]
        console.log(state)
        return state
      
      case DELETE_USER:
        let filteredItem=state.filter((item)=>item.id!==action.key)    
      return filteredItem


      case SEARCH_USER:
        let SearchItem=state.filter((item)=>item.name===action.name) 
      return SearchItem

    default:
        return state
    }
}
