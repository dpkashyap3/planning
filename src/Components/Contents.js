import React from 'react'
import {Container,Row} from "react-bootstrap"
import Details from "./Card/Details"
import Listing from "./Card/Listing"
import Data from "./Data.json";
import Search from "./Search"
import {connect} from "react-redux"

function Contents(props) {
    
    let data=props.data.setTeam.data
    

    return (
        <Container>
            <h2 className="mt-5 display-4">{data?data.name:"Select Your Team"}</h2>
           {data?<div>
            <Search/>
            <hr/>
            <Container style={{display:"flex",overflow:"auto",overflowY:"hidden",maxHeight:"650px"}}>
                <Row>
                <Details id={data.id}/>
                </Row>
                <Container className="top-bottom">
                {
                 Data.map(item=><Listing key={item.id} Data={item.users}/>)
                }
                </Container>
            </Container></div>:null
            }
        </Container>
    )
}
const mapStateToProps=(state)=>{
    return{
        data:state
    }
}

export default connect(mapStateToProps,null)(Contents)
