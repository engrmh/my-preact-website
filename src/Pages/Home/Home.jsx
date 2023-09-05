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
import FullScreen from "../../Components/Footer/FullScreen.jsx";
import {useEffect} from "preact/hooks";
import {gsap} from "gsap";

export default function Home() {
    useEffect(() => {
        gsap.context(() => {
            const tl = gsap.timeline({
                defaults: {
                    ease: 'power2'
                }
            })
            tl
                .from('h1' , { duration: 1 , delay: 1 , y: -50} , '-=0.2')
                .from('h2' , {autoAlpha: 0 , duration: 1 , y: 50 , stagger: 0.2} , '-=0.2')
                .from('.homeBtn' , { autoAlpha: 0 , duration: 0.7 , delay: 0.8 , x: -30 , stagger: 0.5} , 1.5)
                .from('.social' , { autoAlpha: 0 , duration: 1 , x: -30 , stagger: 0.5} , '-=0.2')

        })
    }, []);
    return (
        <div className='homeContainer vh-100'>
            <NavBar active='home'/>
            <Container className='pageWrapper'>
                <Row className='h-100'>
                    <Col xs={12} className='h-100'>
                        <Row className='h-100'>
                            <Col className='d-flex justify-content-start align-items-center w-100'>
                                <div class="w-100">
                                    <h1 className='text-white mb-0 customFont' style={{fontSize: '3rem'}}>
                                        Mohammad Hosein
                                    </h1>
                                    <h2 className='text-white text-wrap mt-0 customFont' style={{fontSize: '3rem' ,fontWeight: 'bolder'}}>
                                        Salim Bahrami
                                    </h2>
                                    <h2 className='text-white' style={{letterSpacing: '.5rem'}}>
                                        FrontEnd Developer
                                    </h2>
                                    <div className="d-flex gap-3 align-items-center mt-5 flex-wrap">
                                        <Link href='/resume' className='homeBtn py-2 px-4 rounded-5 text-decoration-none text-white fs-5 homeBtn'>Resume</Link>
                                        <Link href='' className='homeBtn py-2 px-4 rounded-5 text-decoration-none text-white fs-5 homeBtn'>Portfolio</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} className=''>
                        <Row className=''>
                            <Col className=''>
                                <div className="d-flex gap-3">
                                    <SocialApp link='https://www.linkedin.com/mohammad-hosein-salimbahrami'>
                                        <LinkedInIcon className='text-white fs-3 social'/>
                                    </SocialApp>
                                    <SocialApp link='https://www.instagram.com/engr.mh'>
                                        <InstagramIcon className='text-white fs-3 social'/>
                                    </SocialApp>
                                    <SocialApp link=''>
                                        <PinterestIcon className='text-white fs-3 social'/>
                                    </SocialApp>
                                    <SocialApp link='https://t.me/engr_mh'>
                                        <TelegramIcon className='text-white fs-3 social'/>
                                    </SocialApp>
                                    <SocialApp link='https://github.com/engrmh'>
                                        <GitHubIcon className='text-white fs-3 social'/>
                                    </SocialApp>
                                </div>
                            </Col>
                            <FullScreen />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
