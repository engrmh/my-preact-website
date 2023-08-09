
import './Home.css'
import {Col, Container, Row , Button} from "react-bootstrap";
import {Link} from "preact-router";
import SocialApp from "../../Components/SocialApp/SocialApp.jsx";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NavBar from "../../Components/Navbar/Navbar.jsx";

export default function Home() {
    return (
        <div className='homeContainer vh-100'>
            <NavBar active='home'/>
            <Container className='pageWrapper'>
                <Row className='h-100'>
                    <Col xs={12} className='h-100'>
                        <Row className='h-100'>
                            <Col className='d-flex justify-content-start align-items-center w-100'>
                                <div class="w-100">
                                    <h1 className='text-white mb-0' style={{fontSize: '3rem'}}>
                                        Mohammad Hosein
                                    </h1>
                                    <h2 className='text-white text-wrap mt-0' style={{fontSize: '3rem' ,fontWeight: 'bolder'}}>
                                        Salim Bahrami
                                    </h2>
                                    <h2 className='text-white' style={{letterSpacing: '.5rem'}}>
                                        FrontEnd Developer
                                    </h2>
                                    <div className="d-flex gap-3 align-items-center mt-5 flex-wrap">
                                        <Link href='' className='homeBtn py-2 px-4 rounded-5 text-decoration-none text-white fs-5'>Resume</Link>
                                        <Link href='' className='homeBtn py-2 px-4 rounded-5 text-decoration-none text-white fs-5'>Portfolio</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} className=''>
                        <Row className=''>
                            <Col className=''>
                                <div className="d-flex gap-3">
                                    <SocialApp link=''>
                                        <LinkedInIcon className='text-white fs-3'/>
                                    </SocialApp>
                                    <SocialApp link=''>
                                        <InstagramIcon className='text-white fs-3'/>
                                    </SocialApp>
                                    <SocialApp link=''>
                                        <PinterestIcon className='text-white fs-3'/>
                                    </SocialApp>
                                    <SocialApp link=''>
                                        <TelegramIcon className='text-white fs-3'/>
                                    </SocialApp>
                                    <SocialApp link=''>
                                        <GitHubIcon className='text-white fs-3'/>
                                    </SocialApp>
                                </div>
                            </Col>
                            <Col className='d-flex justify-content-end'>
                                <Button className='bg-transparent border-0'>
                                    <FullscreenIcon className='fs-3'/>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
