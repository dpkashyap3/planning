import React,{useState} from 'react'
import {Container,Navbar,Form,Button,FormGroup} from "react-bootstrap"
import {connect} from "react-redux"
import {searchUser} from "../Redux/Actions"

function Search(props) {

    const [input, setinput] = useState()

    return (
        <Container>
        <Navbar>
           <Form inline className="ml-auto">
            <FormGroup>
                <Form.Label className="mr-2 ml-2" type="label">Search</Form.Label>
                    <Form.Control type="text" size="sm" placeholder="Enter Username" onChange={(e)=>setinput(e.target.value)}/>
                <Button className="ml-2" variant="warning" size="sm" onClick={()=>props.searchUser(input)}>Go..</Button>
                </FormGroup>
           </Form>
        
        
    </Navbar>
        </Container>
    )
}

export default connect(null,{searchUser})(Search)
