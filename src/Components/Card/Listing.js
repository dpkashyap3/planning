import React from 'react'
import {Container,Card,Button,Form,Row} from "react-bootstrap";
import {connect} from "react-redux"

function Listing(props) {
  
  
  let data=props.data.users
  

  const deleteItem=(key)=>{
    let filteredItem=data.filter(item=>item.keyyar!==key)
    console.log(filteredItem)
  }

    return (
        <Container className="top-bottom">
          {data?
            data.map((item,index)=>
              <Row key={index}>
                  <Card className="mb-2 bg-light text-dark">
                  <Card.Body>
                  <Form.Label className="ml-2 mr-2">Name</Form.Label> 
                  <Form.Control  type="text" size="sm" placeholder="Enter Here" value={item.user.name} disabled/>
                  <Form.Label className="ml-2 mr-2">Desciption</Form.Label> 
                  <Form.Control style={{resize:"none",maxHeight:"500px"}} as="textarea" size="sm" placeholder="Enter Here" value={item.user.desc} disabled/>
                  <hr/>
                  <Button variant="danger" size="sm" onClick={()=>deleteItem(index)}>Delete User +</Button>
                  </Card.Body>
            </Card>
          </Row>
            ):null}
          
         
        </Container>
    )
}

const mapStateToProps=(state)=>{
  return{
    data:state
  }
}

export default connect(mapStateToProps,null)(Listing)
