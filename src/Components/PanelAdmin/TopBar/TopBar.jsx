import { Col, Row } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloudOffIcon from "@mui/icons-material/CloudOff";
import CloudIcon from "@mui/icons-material/Cloud";
import MenuIcon from "@mui/icons-material/Menu";
import PowerIcon from "@mui/icons-material/Power";
import PowerOffIcon from "@mui/icons-material/PowerOff";
import SkylaxContext from "../../../Context/Context";
import { useContext, useEffect, useState } from "preact/hooks";
import { getCurrentUrl } from "preact-router";

export default function TopBar() {
  const location = getCurrentUrl();
  const siteContext = useContext(SkylaxContext);
  const [chargingStatus, setChargingStatus] = useState(false);
  const [battryLevel, setBattryLevel] = useState(null);

  const showMenuHandler = () => {
    siteContext.setIsShowSideBarMenu(true);
  };

  navigator.getBattery().then((battery) => {
    setChargingStatus(battery.charging);
    setBattryLevel(battery.level * 100);

    battery.addEventListener("chargingchange", () => {
      setChargingStatus(battery.charging);
      setBattryLevel(battery.level * 100);

    });
  });

  // useEffect(() => {
    
  // }, [siteContext.isShowSideBarMenu]);

  return (
    <div className="pt-3">
      <div class="bg-dark rounded">
        <Row className="justify-content-between p-3">
          <Col className="text-white">
            {siteContext.connectionStatus ? (
              "Dashboard"
            ) : (
              <span className="text-warning">Warning: You are Offline</span>
            )}
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <div class="d-flex gap-3">
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
              <a
                // href="/dashboard/connection"
                className="text-decoration-none text-white d-flex"
              >
                {chargingStatus ? (
                  <PowerIcon className="text-warning" />
                ) : (
                  <PowerOffIcon className="text-danger" />
                )}
                <span className="d-none d-md-block">{battryLevel}%</span>
              </a>
              <button
                // href="/dashboard/connection"
                class="btn bg-transparent p-0 text-white d-block d-lg-none"
                onClick={() => showMenuHandler()}
              >
                <MenuIcon />
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
