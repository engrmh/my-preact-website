import { Col, Row, Dropdown } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloudOffIcon from "@mui/icons-material/CloudOff";
import CloudIcon from "@mui/icons-material/Cloud";
import MenuIcon from "@mui/icons-material/Menu";
import BoltIcon from "@mui/icons-material/Bolt";
import PowerOffIcon from "@mui/icons-material/PowerOff";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WarningIcon from '@mui/icons-material/Warning';
import SkylaxContext from "../../../Context/Context";
import { useContext, useEffect, useState } from "preact/hooks";
import { getCurrentUrl } from "preact-router";

export default function TopBar() {
  const location = getCurrentUrl();
  const siteContext = useContext(SkylaxContext);
  const [chargingStatus, setChargingStatus] = useState(false);
  const [battryLevel, setBattryLevel] = useState(null);
  const [userNameData, setUserNameData] = useState("Need Login");

  const showMenuHandler = () => {
    siteContext.setIsShowSideBarMenu(true);
  };

  navigator.getBattery().then((battery) => {
    setChargingStatus(battery.charging);
    setBattryLevel((battery.level * 100).toFixed());

    battery.addEventListener("chargingchange", () => {
      setChargingStatus(battery.charging);
      setBattryLevel(battery.level * 100);
      navigator.vibrate(100);
    });
  });

  useEffect(() => {
    setUserNameData(siteContext.userInfos);
  }, []);

  const pastDate = new Date(0);

  return (
    <div className="pt-3">
      <div class="bg-dark rounded">
        <Row className="justify-content-between p-3">
          <Col className="text-white">
            {siteContext.connectionStatus ? (
              <span className="d-flex align-items-center">
                <DashboardIcon />
                <span className="ms-2">Dashboard</span>
              </span>
            ) : (
              <span className="d-flex align-items-center text-warning">
                <WarningIcon className="flasher" />
                <span className="ms-2">You are Offline</span>
              </span>
            )}
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <div class="d-flex gap-3">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="m-0 p-0 bg-transparent border-0"
                >
                  <AccountCircleIcon />
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                  <Dropdown.Item
                    href="/dashboard/profile"
                    className="text-white d-flex align-items-center"
                  >
                    <PersonIcon />
                    <span className="ms-2">Profile</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="/dashboard/setting" class="text-white">
                    <SettingsIcon />
                    <span className="ms-2">Settings</span>
                  </Dropdown.Item>
                  {/* <Dropdown.Item
                    href="/dashboard/setting"
                    class="text-white"
                  >
                    <SettingsIcon />
                    <span className="ms-2">Home</span>
                  </Dropdown.Item> */}
                  <Dropdown.Divider />
                  <Dropdown.Item
                    href="/"
                    className="customRedFont"
                    onClick={() => {
                      document.cookie = `skylaxUserToken=; expires=${pastDate.toUTCString()}; path=/`;

                    }}
                  >
                    <LogoutIcon />
                    <span className="ms-2">LogOut</span>
                  </Dropdown.Item>
                  {/* <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item> */}
                </Dropdown.Menu>
              </Dropdown>
              {/* <a
                href="/dashboard/notifs"
                class="text-decoration-none text-white"
              >
                <NotificationsIcon />
              </a> */}
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
                  <BoltIcon className="text-warning flasher" />
                ) : (
                  <PowerOffIcon className="text-danger" />
                )}
                <span className="">{battryLevel}%</span>
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
