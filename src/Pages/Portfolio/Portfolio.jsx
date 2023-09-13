import './Portfolio.css'
import NavBar from "../../Components/Navbar/Navbar.jsx";
import {Col, Row} from "react-bootstrap";
import LocationOnIcon from "@mui/icons-material/LocationOn.js";
import FullScreen from "../../Components/Footer/FullScreen.jsx";

export default function Portfolio() {
    return (
        <div className='portfolioContainer vh-100'>
            <div class="">
                <NavBar active='portfolio'/>
            </div>
            <div class=""></div>
            <div className='container position-fixed bottom-0 start-0 end-0'>
                <div className="d-flex gap-3 pb-2">
                    <h5 className="text-white d-flex align-items-center">
                        <LocationOnIcon className='fs-3 me-2'/>
                        Sari, Mazandran
                    </h5>
                    <FullScreen/>
                </div>
            </div>
        </div>
    )
}
