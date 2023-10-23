import "../SideBar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HandymanIcon from "@mui/icons-material/Handyman";
import GroupIcon from "@mui/icons-material/Group";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import FormatTextdirectionRToLIcon from "@mui/icons-material/FormatTextdirectionRToL";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import TaskIcon from "@mui/icons-material/Task";
import { Offcanvas } from "react-bootstrap";
import { useContext, useEffect, useState } from "preact/hooks";
import SkylaxContext from "../../../../Context/Context.jsx";
import ShortcutIcon from "@mui/icons-material/Shortcut";

export default function SideBarOffCanvas() {
  const siteContext = useContext(SkylaxContext);
  const [showMenu, setShowMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  useEffect(() => {
    setActiveMenu("home");
  }, []);
  const handleClose = () => {
    siteContext.setIsShowSideBarMenu(false);
    setShowMenu(false);
  };
  useEffect(() => {
    setShowMenu(siteContext.isShowSideBarMenu);
  }, [siteContext.isShowSideBarMenu]);
  return (
    <>
      <Offcanvas
        show={siteContext.isShowSideBarMenu}
        onHide={handleClose}
        className="bg-dark rounded p-2 sideBarContainer"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <a href="/" className="text-white text-decoration-none fs-4">
              SKYLAX
            </a>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="text-center">
            <div className="mt-4 d-flex flex-column gap-3">
              <a
                href="/dashboard"
                onClick={() => {
                  handleClose();
                  setActiveMenu("home");
                }}
                className={
                  activeMenu === "home"
                    ? "sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none sideBarLinkActive"
                    : "sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none"
                }
              >
                <DashboardIcon />
                <span className="text-white">Dashboard</span>
              </a>
              <a
                href="/dashboard/projects"
                onClick={() => {
                  handleClose();
                  setActiveMenu("projects");
                }}
                className={
                  activeMenu === "projects"
                    ? "sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none sideBarLinkActive"
                    : "sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none"
                }
              >
                <HandymanIcon />
                <span className="text-white">Projects</span>
              </a>
              <a
                href="/dashboard/users"
                onClick={() => {
                  handleClose();
                  setActiveMenu("users");
                }}
                className={
                  activeMenu === "users"
                    ? "sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none sideBarLinkActive"
                    : "sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none"
                }
              >
                <GroupIcon />
                <span className="text-white">Users</span>
              </a>
              <a
                href="/dashboard/notifs"
                onClick={() => {
                  handleClose();
                  setActiveMenu("notifs");
                }}
                className={
                  activeMenu === "notifs"
                    ? "sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none sideBarLinkActive"
                    : "sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none"
                }
              >
                <NotificationsIcon />
                <span className="text-white">Notifications</span>
              </a>
              <a
                href="/dashboard/tasks"
                onClick={() => {
                  handleClose();
                  setActiveMenu("tasks");
                }}
                className={
                  activeMenu === "tasks"
                    ? "sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none sideBarLinkActive"
                    : "sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none"
                }
              >
                <TaskIcon />
                <span className="text-white">Tasks</span>
              </a>
              <a
                href="/dashboard/shortcuts"
                onClick={() => {
                  handleClose();
                  setActiveMenu("shortcuts");
                }}
                className={
                  activeMenu === "shortcuts"
                    ? "sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none sideBarLinkActive"
                    : "sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none"
                }
              >
                <ShortcutIcon />
                <span className="text-white">Shortcuts</span>
              </a>
              <a
                // href="/dashboard/videoChat"
                onClick={() => {
                  handleClose();
                  setActiveMenu("videoChat");
                }}
                className={
                  activeMenu === "analytics"
                    ? "sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none sideBarLinkActive"
                    : "sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none"
                }
              >
                <VideoChatIcon />
                <span className="text-white">
                  Video Chat
                </span>
              </a>
              <a
                href="/dashboard/analytics"
                onClick={() => {
                  handleClose();
                  setActiveMenu("analytics");
                }}
                className={
                  activeMenu === "analytics"
                    ? "sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none sideBarLinkActive"
                    : "sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none"
                }
              >
                <AnalyticsIcon />
                <span className="text-white">Analytics</span>
              </a>
              <a
                // href="/dashboard"
                className="rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none"
              >
                <FormatTextdirectionRToLIcon />
                <span className="text-white">
                  RTL <span style={{ fontSize: "10px" }}>(SOON)</span>
                </span>
              </a>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
