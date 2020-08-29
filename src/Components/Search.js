import React from 'react'
import {Container,Navbar,Form,Button,FormGroup} from "react-bootstrap"

function Search() {
    return (
        <Container>
        <Navbar>
           <Form inline className="ml-auto">
            <FormGroup>
                <Form.Label className="mr-2 ml-2" type="label">Search</Form.Label>
                    <Form.Control type="text" size="sm" placeholder="Enter Username"/>
                <Button className="ml-2" variant="warning" size="sm">Go..</Button>
                </FormGroup>
           </Form>
        
        
    </Navbar>
        </Container>
    )
}

export default Search
