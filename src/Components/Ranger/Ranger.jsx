import {Col, Image, Row} from "react-bootstrap";
import './Ranger.css'

export default function Ranger({image , title , progressCount }) {
    return (
        <Row className='justify-content-between align-items-center mb-2 w-100'>
            <Col class="d-flex justify-content-between align-items-center me-5">
                <div class="d-flex">
                    {
                        image && (
                            <div className="p-1 me-4" style={{border: '3px solid #fff'}}>
                                <Image src={image} className='text-white' style={{width:'2rem'}}/>
                            </div>
                        )
                    }
                    <h5 className='text-white d-flex justify-content-between align-items-center'>{title}</h5>
                </div>
            </Col>
            <Col>
                <input type='range' defaultValue={progressCount} className='rangeProgress w-100' readonly="1"/>
            </Col>
        </Row>
    )
}
