import './Resume.css'
import {Col, Container, Row} from "react-bootstrap";
import NavBar from "../../Components/Navbar/Navbar.jsx";
import DataBox from "../../Components/DataBox/DataBox.jsx";
import Ranger from "../../Components/Ranger/Ranger.jsx";
import MyTimeLine from "../../Components/Timeline/MyTimeLine.jsx";
import Interest from "../../Components/Interest/interest.jsx";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import FlightIcon from '@mui/icons-material/Flight';
import CookieIcon from '@mui/icons-material/Cookie';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FullScreen from "../../Components/Footer/FullScreen.jsx";

export default function Resume() {
    return (
        <div className='resumeContainer'>
            <div class="">
                <NavBar active='resume'/>
            </div>
            <Container className="overflow-auto mb-5">
                <Row className='h-100'>
                    <Col xs={12} lg={4} className='flex-wrap'>
                        <div className="">
                            <DataBox title='MAIN SOFTWARE SKILLS'>
                                <Ranger image='/img/Pictogrammers-Material-React.svg' title='React' progressCount={95}/>
                                <Ranger image='/img/Simpleicons-Team-Simple-Preact.svg' title='Preact' progressCount={95}/>
                                <Ranger image='/img/Arturo-Wibawa-Akar-Nextjs.svg' title='Next' progressCount={20}/>
                                <Ranger image='/img/Simpleicons-Team-Simple-Typescript.svg' title='TypeScript' progressCount={10}/>
                            </DataBox>
                            <DataBox title='MORE SOFTWARE SKILLS'>
                                <p className='text-white'>HTML - CSS - BOOSTRAP5 - MUI - GIT - FIGMA - CHARTS - SWIPER - RESTFULL API - ...</p>
                            </DataBox>
                            <DataBox title='LANGUAGES'>
                                <Ranger title='Persian' progressCount={100}/>
                                <Ranger title='English' progressCount={65}/>
                            </DataBox>
                        </div>
                    </Col>
                    <Col xs={12} lg={5} className=''>
                        <div className="ms-lg-5 ps-lg-3">
                            <DataBox title='EXPERIENCE'>
                                <MyTimeLine/>
                            </DataBox>
                            <DataBox title='EDUCATION'>
                                <h6 className='text-white fw-bold'>Computer Engineering(Bachelor)</h6>
                                <h6 className='text-white'>Payam Noor University</h6>
                            </DataBox>
                        </div>
                    </Col>
                    <Col xs={12} lg={3} className=''>
                        <div className="">
                            <DataBox title='WHAT CAN I DO?'>
                                <h6 className='text-white'>FRONTEND DEVELOPING - UI DESIGNING - TIME MANAGEMENT - WORDPRESS - RESOPNSIVE</h6>
                            </DataBox>
                            <DataBox title='SOFT SKILLS'>
                                <p className="text-white">
                                    Creativity - Team Work - Organizing
                                </p>
                            </DataBox>
                            <DataBox title='HOBBIS & INTERESTS'>
                                <div className="d-flex justify-content-between">
                                    <Interest title='Reading'>
                                        <AutoStoriesIcon className='text-white fs-2'/>
                                    </Interest>
                                    <Interest title='Travel'>
                                        <FlightIcon className='text-white fs-2'/>
                                    </Interest>
                                    <Interest title='Cook'>
                                        <CookieIcon className='text-white fs-2'/>
                                    </Interest>
                                    <Interest title='Game'>
                                        <SportsEsportsIcon className='text-white fs-2'/>
                                    </Interest>
                                </div>
                            </DataBox>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='py-3'>
                <div className='container'>
                    <FullScreen/>
                </div>
            </div>
        </div>
    )
}