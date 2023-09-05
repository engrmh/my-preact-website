import {Container , Nav , Navbar , NavDropdown} from 'react-bootstrap';
import {useEffect , useRef} from "preact/hooks";
import {gsap} from "gsap";
import './NavBar.css'

function NavBar({active}) {
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
          <Nav className="navLinks">
            <Nav.Link href='/' className={active === 'home'? 'text-white border-bottom border-2' : 'text-white'} style={{width: "fit-content"}}>Home</Nav.Link>
            <Nav.Link href='/about' className={active === 'about'? 'text-white border-bottom border-2' : 'text-white'} style={{width: "fit-content"}}>About</Nav.Link>
            <Nav.Link href='/resume' className={active === 'resume'? 'text-white border-bottom border-2' : 'text-white'} style={{width: "fit-content"}}>Resume</Nav.Link>
            <Nav.Link href='/portfolio' className={active === 'portfolio'? 'text-white border-bottom border-2' : 'text-white'} style={{width: "fit-content"}}>Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;