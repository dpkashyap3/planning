import React from 'react'
import {Container,ListGroup} from "react-bootstrap"
import {connect} from "react-redux"
import {setTeam} from "../Redux/Actions"
function Teams(props) {

    let data=props.data.teams

    return (
        <Container>
            <h2 className="mb-5 mt-5">Teams</h2>
            <ListGroup>
            {
            data.map((item,index)=><ListGroup.Item style={{cursor:"pointer"}} className="ListItem" variant="primary" key={index} onClick={()=>{props.setTeam(item)}}>{item.data.name}</ListGroup.Item>)   
            }
            </ListGroup>
        </Container>
    )
}
function mapStateToProps(state){
 return{
     data:state
 }
}

export default connect(mapStateToProps,{setTeam})(Teams)
