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
import SkylaxContext from "./Context/Context.jsx";
import Login from "./Pages/Login/Login.jsx";
import { Col, Container, Row } from "react-bootstrap";
import TopBar from "./Components/PanelAdmin/TopBar/TopBar.jsx";
import SideBar from "./Components/PanelAdmin/SideBar/SideBar.jsx";
import SideBarOffCanvas from "./Components/PanelAdmin/SideBar/SideBarOffCanvas/SideBarOffCanvas.jsx";
import Users from "./Pages/Dashboard/Users/Users.jsx";
import Notifications from "./Pages/Dashboard/Notifications/Notifications.jsx";
import Analytics from "./Pages/Dashboard/Analytics/Analytics.jsx";
import Tasks from "./Pages/Dashboard/Tasks/Tasks.jsx";
import CurrentTask from "./Pages/Dashboard/CurrentTask/CurrentTask.jsx";
import ShortCuts from "./Pages/Dashboard/ShortCuts/ShortCuts.jsx";
import Profile from "./Pages/Dashboard/Profile/Profile.jsx";
import { useCallback } from "react";
import Swal from "sweetalert2";

export function App() {
  const navigate = useRouter();
  const location = getCurrentUrl();
  const [isLogin, setIsLogin] = useState(false);
  const [userInfos, setUserInfos] = useState({});
  const [connectionStatus, setConnectionStatus] = useState(true);
  const [isShowSideBarMenu, setIsShowSideBarMenu] = useState(false);
  const [token, setToken] = useState("");
  const login = (tokenData) => {
    setToken(tokenData);
    setIsLogin(true);
    localStorage.setItem("user", JSON.stringify({ token }));
  };

  const logout = useCallback(() => {
    setToken(null);
    setUserInfos({});
    setIsLogin(false);
    localStorage.removeItem("user");
  }, []);

  const getUserInfosFromServer = (tokenData) => {
    fetch(`https://apptest.bashiridev.ir/api/Account/login`, {
      headers: {
        Authorization: `Bearer ${tokenData}`,
      },
    })
      .then((res) => res.json())
      .then((userData) => {
        setIsLogin(true);
        setUserInfos(userData);
        console.log(userData);
      });
  };

  useEffect(() => {
    const localStorageDate = JSON.parse(localStorage.getItem("user"));
    if (localStorageDate) {
      fetch(`https://apptest.bashiridev.ir/api/Account/login`, {
        headers: {
          Authorization: `Bearer ${localStorageDate.token}`,
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          setIsLogin(true);
          setUserInfos(userData);
        });
    }
  }, [login, token]);

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
            userInfos,
            setUserInfos,
            connectionStatus,
            setConnectionStatus,
            isShowSideBarMenu,
            setIsShowSideBarMenu,
            getUserInfosFromServer,
          }}
        >
          <Container fluid className="">
            {isLogin ? (
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
            ) : (
              Swal.fire("Access Denied!!", "Please Login", "error").then(
                (res) => {
                  console.log(res);
                  if (res.isConfirmed) {
                    route("/login");
                  }
                }
              )
            )}
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
