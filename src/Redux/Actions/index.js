export const CREATE_TEAM="CREATE_TEAM"
export const CREATE_USER="CREATE_USER"
export const SET_TEAM="SET_TEAM"

export const createTeam=(name,ttype,users)=>{
    return{
        type:CREATE_TEAM,
        name,
        ttype,
        users
    }
}


export const createUser=(id,name,desc)=>{
    return{
        type:CREATE_USER,
        id,
        name,
        desc
    }
}

export const setTeam=(item)=>{
    return{
        type:SET_TEAM,
        item
    }
}