
import './About.css'
import {Col, Container, Row , Button} from "react-bootstrap";
import {Link} from "preact-router";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NavBar from "../../Components/Navbar/Navbar.jsx";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FullScreen from "../../Components/Footer/FullScreen.jsx";

export default function About() {
    return (
        <div className='aboutContainer vh-100'>
            <NavBar active='about'/>
            <Container className='pageWrapper'>
                <Row className='h-100'>
                    <Col xs={12} className='h-100'>
                        <Row className='h-100'>
                            <Col className='d-flex justify-content-start align-items-center w-100'>
                                <div class="w-100">
                                    <h2 className='text-white mb-0 border-bottom border-2 py-0 mb-2' style={{width: 'fit-content'}}>
                                        ABOUT
                                    </h2>
                                    <Link href='mailto: en.mohammadhosein@gmail.com' className='text-white text-decoration-none'>en.mohammadhosein@gmail.com</Link>
                                    <p className='text-white mt-5 fs-5' style={{maxWidth: '30rem'}}>
                                        Front-end developer in the web sector with more than 3 years of experience in this field. With great enthusiasm to learn and improve. I am committed to work and responsibility and always try to contribute to the development and improvement of projects in the best possible way. I enjoy team challenges and am interested in the development and growth of my group both in my country and globally.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} className=''>
                        <Row className=''>
                            <Col className=''>
                                <div className="d-flex gap-3">
                                    <h5 className="text-white d-flex align-items-center">
                                        <LocationOnIcon className='fs-3 me-2'/>
                                        Sari, Mazandran
                                    </h5>
                                </div>
                            </Col>
                            <FullScreen/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}