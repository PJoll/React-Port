import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container  from 'react-bootstrap/Container'
      
function Navcomponent() {
  return (
    
      






<Navbar>

         <Container className='text-dark bg-grey justify-centre '>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#footer">Footer</Nav.Link>
          </Nav>
        </Container> 
   
      </Navbar>
           
        );
      }
      
export default  Navcomponent
