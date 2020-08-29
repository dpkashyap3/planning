import React from 'react';
import {Container,Col,Row} from "react-bootstrap"
import './App.css';
import Nav from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Contents from "./Components/Contents";

function App() {
  return (
  <Container fluid="false">
    <Row>
      <Col><Nav/></Col>
    </Row>
    <Row>
      <Col lg={2} md={2} sm={12} style={{minHeight:"100%"}} className="bg-secondary text-white"><Sidebar/></Col>
      <Col lg={8} md={8} sm={12} style={{height:"92.4vh",}}><Contents/></Col>
    </Row>
  </Container>
  );
}

export default App;
