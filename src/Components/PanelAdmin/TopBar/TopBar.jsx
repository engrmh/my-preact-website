import { Col, Row } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloudOffIcon from "@mui/icons-material/CloudOff";
import CloudIcon from "@mui/icons-material/Cloud";
import SkylaxContext from "../../../Context/Context.jsx";
import { useContext } from "preact/hooks";

export default function TopBar() {
  const siteContext = useContext(SkylaxContext);
  console.log(siteContext);

  return (
    <div className="pt-3">
      <div class="bg-dark rounded">
        <Row className="justify-content-between p-2">
          <Col className="text-white">
            {siteContext.connectionStatus ? (
              "Dashboard"
            ) : (
              <span className="text-warning">Warning: You are Offline</span>
            )}
          </Col>
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
              <a
                // href="/dashboard/connection"
                class="text-decoration-none text-white"
              >
                {siteContext.connectionStatus ? (
                  <CloudIcon className="text-success" />
                ) : (
                  <CloudOffIcon className="text-danger" />
                )}
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
