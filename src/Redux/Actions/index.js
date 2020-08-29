export const CREATE_TEAM="CREATE_TEAM"
export const CREATE_USER="CREATE_USER"
export const SET_TEAM="SET_TEAM"
export const DELETE_USER="DELETE_USER"
export const SEARCH_USER="SEARCH_USER"
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

export const deleteUser=(key)=>{
    return{
        type:DELETE_USER,
        key
    }
}

export const searchUser=(name)=>{
    return{
        type:SEARCH_USER,
        name
    }
}