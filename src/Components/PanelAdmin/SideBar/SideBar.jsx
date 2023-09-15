import "./SideBar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HandymanIcon from "@mui/icons-material/Handyman";
import GroupIcon from "@mui/icons-material/Group";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import FormatTextdirectionRToLIcon from "@mui/icons-material/FormatTextdirectionRToL";

export default function SideBar() {
  return (
    <div className="pt-3">
      <div class="bg-dark rounded p-2 sideBarContainer text-center">
        <a href="/dashboard" class="text-white text-decoration-none fs-4">
          SKYLAX
        </a>
        <div class="mt-4 d-flex flex-column gap-3">
          <a
            href="/dashboard"
            className="sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none sideBarLinkActive"
          >
            <DashboardIcon />
            <span className="text-white">Dashboard</span>
          </a>
          <a
            href="/dasboard/projects"
            className="sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none "
          >
            <HandymanIcon />
            <span className="text-white">Projects</span>
          </a>
          <a
            href="/dashboard/users"
            className="sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none "
          >
            <GroupIcon />
            <span className="text-white">Users</span>
          </a>
          <a
            href="/dashboard/notifs"
            className="sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none "
          >
            <NotificationsIcon />
            <span className="text-white">Notifications</span>
          </a>
          <a
            href="/dashboard/analytics"
            className="sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none "
          >
            <AnalyticsIcon />
            <span className="text-white">Analytics</span>
          </a>
          <a
            href="/dashboard"
            className="sideBarLink rounded d-flex align-items-center gap-2 p-2 text-white text-decoration-none"
          >
            <FormatTextdirectionRToLIcon />
            <span className="text-white">
              RTL <span style={{ fontSize: "10px" }}>(SOON)</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
