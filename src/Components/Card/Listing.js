import React from 'react'
import {Container,Card,Button,Form,Row} from "react-bootstrap";
import {connect} from "react-redux"
import {deleteUser} from "../../Redux/Actions"

function Listing(props) {
  
  
  
  
    return (
        <Container className="top-bottom">
          {
            props.data.map((item)=>
              <Row key={item.id}>
                  <Card className="mb-2 bg-light text-dark">
                  <Card.Body>
                  <Form.Label className="ml-2 mr-2">Name</Form.Label> 
                  <Form.Control  type="text" size="sm" placeholder="Enter Here" value={item.name} disabled/>
                  <Form.Label className="ml-2 mr-2">Desciption</Form.Label> 
                  <Form.Control style={{resize:"none",maxHeight:"500px"}} as="textarea" size="sm" placeholder="Enter Here" value={item.desc} disabled/>
                  <hr/>
                  <Button variant="danger" size="sm" onClick={()=>props.deleteUser(item.id)}>Delete User</Button>
                  </Card.Body>
              </Card>
          </Row>
            )
        }
        </Container>
    )
}

const mapStateToProps=(state)=>{
  return{
    data:state.users
  }
}

export default connect(mapStateToProps,{deleteUser})(Listing)
