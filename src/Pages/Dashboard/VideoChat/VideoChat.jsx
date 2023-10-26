import { Alert, Button, Col, Row } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import LoginIcon from "@mui/icons-material/Login";
import "./VideoChat.css";

export default function VideoChat() {
  let rows = [];

  return (
    <Row className="mt-4">
      <Col xs={12} md={12} lg={12}>
        <div class="">
          <div class="p-3 d-flex justify-content-between align-items-center setShadow rounded bg-white mb-3">
            <span className="fs-5">SKY Meet</span>
            <div className="d-flex align-items-center gap-2">
              <Button className="p-2 customGreen customGreenHover border-0 createChatBtn overflow-hidden d-flex align-items-center">
                <AddIcon />
                <span className="chatBtnTitle ms-2">Create</span>
              </Button>
              <Button className="p-2 customBlue customBlueHover border-0 joinChatBtn overflow-hidden d-flex align-items-center">
                <LoginIcon />
                <span className="chatBtnTitle ms-2">Join</span>
              </Button>
            </div>
          </div>
          <div class="p-3 setShadow rounded bg-white">
            {rows.length === 0 ? (
              <Alert variant="warning" className="text-center">
                This section is under construction. Go Back Later
              </Alert>
            ) : (
              <div class=""></div>
            )}
          </div>
        </div>
      </Col>
    </Row>
  );
}