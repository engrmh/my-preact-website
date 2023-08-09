import './Page404.css'
import {Col, Container, Row , Button} from "react-bootstrap";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import Typewriter from 'typewriter-effect';
import {Link} from "preact-router";

export default function Page404() {
    return (
        <div className='Page404Container vh-100'>
            <Container className='warpper'>
                <Row className='h-100'>
                    <Col xs={12} className='h-100'>
                        <Row className='h-100'>
                            <Col className='d-flex justify-content-center align-items-center w-100'>
                                <div class="w-100 d-flex justify-content-center">
                                    <h2 className='text-white py-0 mb-2 text-center' style={{width: 'fit-content'}}>
                                        <Typewriter
                                            options={{
                                                strings: ['OPPS!', '404 Page Not Found'],
                                                autoStart: true,
                                                loop: true
                                            }}
                                        />
                                    </h2>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} className=''>
                        <Row className=''>
                            <Col className=''>
                                <Link className='bg-black bg-opacity-50 rounded-4 text-decoration-none text-white py-2 px-3' style={{border: '1px solid #fff'}} href='/'>
                                    Back Home
                                </Link>
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