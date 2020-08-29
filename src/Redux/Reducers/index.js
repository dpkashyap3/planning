import {combineReducers} from "redux"
import teams from "./teams"
import users from "./users"
import setTeam from "./setTeam"

const rootReducers=combineReducers({
    teams,users,setTeam
})

export default rootReducers