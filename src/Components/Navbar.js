import React,{useState} from 'react'
import {Navbar,Nav,Form,Button} from "react-bootstrap"
import {connect} from "react-redux";
import {createTeam} from "../Redux/Actions"
function NavbarComp({createTeam}) {

    const [name, setname] = useState("")

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Planner</Navbar.Brand>
            <Nav className="ml-auto">
               <Form inline>
                    <Form.Label className="mr-2 ml-2" type="label">Select Type</Form.Label>
                        <Form.Control as="select" size="sm">
                            <option>Choose Any</option>
                            <option>Teams</option>
                        </Form.Control>
                        <Form.Label className="ml-2 mr-2">Team Name</Form.Label> 
                        <Form.Control type="text" size="sm" placeholder="Enter Here" id="name" onChange={(e)=>setname(e.target.value)}/>
                        <Button className="ml-2" variant="warning" size="sm" onClick={()=>createTeam(name,"Teams")}>CREATE</Button>
               </Form>
            </Nav>
            
        </Navbar>
    )
}


export default connect(null,{createTeam})(NavbarComp)
