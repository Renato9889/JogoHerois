
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../pages/style.css';
import Container from 'react-bootstrap/Container';

function  Header(){
  return (
    <div>
      <Navbar>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/personagens">Personagens</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header