import { Col, Row } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function TopBar() {
  return (
    <div className="pt-3">
      <div class="bg-light bg-opacity-50 rounded">
        <Row className="justify-content-between p-2">
          <Col>Welcome</Col>
          <Col className="d-flex justify-content-end align-items-center">
            <div class="d-flex gap-2">
              <a
                href="/dashboard/profile"
                class="text-decoration-none text-white"
              >
                <PersonIcon />
              </a>
              <a
                href="/dashboard/setting"
                class="text-decoration-none text-white"
              >
                <SettingsIcon />
              </a>
              <a
                href="/dashboard/notifs"
                class="text-decoration-none text-white"
              >
                <NotificationsIcon />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
