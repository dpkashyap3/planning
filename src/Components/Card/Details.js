import React,{useState} from 'react'
import {Container,Card,Button,Form,Row} from "react-bootstrap";
import {connect} from "react-redux"
import {createUser} from "../../Redux/Actions"
function Details({createUser,id}) {

const [name, setname] = useState("")
const [desc, setdesc] = useState("")

    return (
        <Container>
          <Row>
            <Card className="mb-2 bg-secondary text-white">
                  <Card.Body>
                  <Form.Label className="ml-2 mr-2">Name</Form.Label> 
                  <Form.Control type="text" id="username" size="sm" onChange={(e)=>setname(e.target.value)} placeholder="Enter Here"/>
                  <Form.Label className="ml-2 mr-2">Description</Form.Label> 
                  <Form.Control as="textarea" id="desc" size="sm" onChange={(e)=>setdesc(e.target.value)} placeholder="Enter Here"/>
                  <hr/>
                  <Button variant="warning" size="sm" onClick={()=>createUser(id,name,desc)}>Create User +</Button>
                  </Card.Body>
            </Card>
          </Row>
        </Container>
    )
}

export default connect(null,{createUser})(Details)
