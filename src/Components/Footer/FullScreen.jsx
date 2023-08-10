import {Button, Col} from "react-bootstrap";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import {useState} from "preact/hooks";

export default function FullScreen() {
    const [isFullScreen, setIsFullScreen] = useState(false)
    const fullScreenHandler = () =>{
        if (!isFullScreen){
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
            setIsFullScreen(true)
        }else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            setIsFullScreen(false)
        }
    }
    return (
        <Col className='d-flex justify-content-end'>
            <Button className='bg-transparent border-0' onClick={fullScreenHandler}>
                {
                    !isFullScreen ? (
                        <FullscreenIcon className='fs-3'/>
                    ) : (
                        <FullscreenExitIcon className='fs-3'/>
                    )
                }
            </Button>
        </Col>
    )
}
