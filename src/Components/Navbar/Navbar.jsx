import {Container , Nav , Navbar , NavDropdown} from 'react-bootstrap';
import {useEffect , useRef} from "preact/hooks";
import {gsap} from "gsap";

function NavBar() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power2'
        }
      })
      tl
          .from('.navLinks a' , {y: -50 , duration: 1 , stagger: 0.5})

    })
    // return ctx.revert()
  }, []);
  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className=''/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navLinks">
            <Nav.Link href='/' className='text-white' active>Home</Nav.Link>
            <Nav.Link href='/about' className='text-white'>About</Nav.Link>
            <Nav.Link href='/resume' className='text-white'>Resume</Nav.Link>
            <Nav.Link href='/portfolio' className='text-white'>Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;