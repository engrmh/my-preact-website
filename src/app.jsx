import Router, { getCurrentUrl, useRouter, route } from "preact-router";
import "./app.css";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Page404 from "./Pages/Page404/Page404.jsx";
import Resume from "./Pages/Resume/Resume.jsx";
import CurrentProject from "./Pages/CurrentProject/CurrentProject.jsx";
import Portfolio from "./Pages/Portfolio/Portfolio.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Projects from "./Pages/Dashboard/Projects/Projects.jsx";
import { useEffect, useState } from "preact/hooks";
import { createClient } from "@supabase/supabase-js";
import SkylaxContext from "./Context/Context.jsx";
import Login from "./Pages/Login/Login.jsx";
import { Col, Container, Row } from "react-bootstrap";
import TopBar from "./Components/PanelAdmin/TopBar/TopBar.jsx";
import SideBar from "./Components/PanelAdmin/SideBar/SideBar.jsx";
import { toast } from "react-toastify";
import SideBarOffCanvas from "./Components/PanelAdmin/SideBar/SideBarOffCanvas/SideBarOffCanvas.jsx";
import Users from "./Pages/Dashboard/Users/Users.jsx";
import Notifications from "./Pages/Dashboard/Notifications/Notifications.jsx";
import Analytics from "./Pages/Dashboard/Analytics/Analytics.jsx";
import Tasks from "./Pages/Dashboard/Tasks/Tasks.jsx";
import CurrentTask from "./Pages/Dashboard/CurrentTask/CurrentTask.jsx";
import ShortCuts from "./Pages/Dashboard/ShortCuts/ShortCuts.jsx";
import Profile from "./Pages/Dashboard/Profile/Profile.jsx";

export function App() {
  const location = getCurrentUrl();
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [projects, setProjects] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState(true);
  const [isShowSideBarMenu, setIsShowSideBarMenu] = useState(false);

  useEffect(() => {
    console.log(projects);
    // console.log(isShowSideBarMenu);
  }, []);

  window.addEventListener("keydown", (e) => {
    if (e.keyCode === 76) {
      route("/login");
    }
  });

  window.addEventListener("offline", () => {
    setConnectionStatus(false);
  });

  window.addEventListener("online", () => {
    setConnectionStatus(true);
  });

  return (
    <>
      {location.includes("dashboard") ? (
        <SkylaxContext.Provider
          value={{
            isLogin,
            setIsLogin,
            userInfo,
            setUserInfo,
            connectionStatus,
            setConnectionStatus,
            isShowSideBarMenu,
            setIsShowSideBarMenu,
          }}
        >
          <Container fluid className="">
            <Row>
              <Col lg={2}>
                <div class="position-sticky top-0">
                  <SideBar />
                </div>
                <SideBarOffCanvas />
              </Col>
              <Col xs={12} md={12} lg={10}>
                <div class="position-sticky top-0" style={{ zIndex: "1000" }}>
                  <TopBar />
                </div>
                <div class="pb-5">
                  <Router>
                    <Dashboard path="/dashboard" />
                    <Projects path="/dashboard/projects" />
                    <Users path="/dashboard/users" />
                    <Notifications path="/dashboard/notifs" />
                    <Analytics path="/dashboard/analytics" />
                    <Tasks path="/dashboard/tasks" />
                    <CurrentTask path="/dashboard/currentTask/:id" />
                    <ShortCuts path="/dashboard/shortcuts" />
                    <Profile path="/dashboard/profile" />
                    {/*<Page404 path="/dashboard/*" default />*/}
                  </Router>
                </div>
              </Col>
            </Row>
          </Container>
        </SkylaxContext.Provider>
      ) : (
        <>
          <Router>
            <Home path="/" />
            <About path="/about" />
            <Resume path="/resume" />
            <Portfolio path="/portfolio" />
            <CurrentProject path="/portfolio/:current" />
            <Login path="/login" />
            <Page404 path="/*" default />
          </Router>
        </>
      )}
    </>
  );
}
