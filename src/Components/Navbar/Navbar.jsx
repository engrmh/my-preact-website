import {Container , Nav , Navbar , NavDropdown} from 'react-bootstrap';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/' className='text-white' active>Home</Nav.Link>
            <Nav.Link href='/about' className='text-white'>About</Nav.Link>
            <Nav.Link href='/resume' className='text-white'>Resume</Nav.Link>
            {/*<Nav.Link href='/portfolio' className='text-white'>Portfolio</Nav.Link>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;