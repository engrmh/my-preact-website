import "./SideBar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HandymanIcon from "@mui/icons-material/Handyman";
import GroupIcon from "@mui/icons-material/Group";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import FormatTextdirectionRToLIcon from "@mui/icons-material/FormatTextdirectionRToL";
import TaskIcon from "@mui/icons-material/Task";
import { useContext, useEffect, useState } from "preact/hooks";
import SkylaxContext from "../../../Context/Context.jsx";

export default function SideBar() {
  const siteContext = useContext(SkylaxContext);
  const [activeMenu, setActiveMenu] = useState("");
  useEffect(() => {
    setActiveMenu("home");
  }, []);

  return (
    <>
      <div className="pt-3 d-none d-lg-block">
        <div class="bg-dark rounded p-2 sideBarContainer text-center">
          <a href="/dashboard" class="text-white text-decoration-none fs-4">
            SKYLAX
          </a>
          <div class="mt-4 d-flex flex-column gap-3">
            <a
              href="/dashboard"
              onClick={() => setActiveMenu("home")}
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
              onClick={() => setActiveMenu("projects")}
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
              onClick={() => setActiveMenu("users")}
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
              onClick={() => setActiveMenu("notifs")}
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
              href="/dashboard/analytics"
              onClick={() => setActiveMenu("analytics")}
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
              href="/dashboard/tasks"
              onClick={() => setActiveMenu("tasks")}
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
      </div>
    </>
  );
}
