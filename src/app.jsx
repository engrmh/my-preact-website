import Router, { getCurrentUrl, route } from "preact-router";
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
import TopBar from "./Components/PanelAdmin/TopBar/TopBar";
import SideBar from "./Components/PanelAdmin/SideBar/SideBar";
import SideBarOffCanvas from "./Components/PanelAdmin/SideBar/SideBarOffCanvas/SideBarOffCanvas";
import Users from "./Pages/Dashboard/Users/Users";
import Notifications from "./Pages/Dashboard/Notifications/Notifications";
import Analytics from "./Pages/Dashboard/Analytics/Analytics";
import Tasks from "./Pages/Dashboard/Tasks/Tasks";
import CurrentTask from "./Pages/Dashboard/CurrentTask/CurrentTask";
import ShortCuts from "./Pages/Dashboard/ShortCuts/ShortCuts";
import Profile from "./Pages/Dashboard/Profile/Profile";
import { useCallback } from "react";
import Swal from "sweetalert2";

export function App() {
  const [siteLocation, setSiteLocation] = useState(getCurrentUrl());
  const [login, setLogin] = useState(true);
  const [userInfos, setUserInfos] = useState({});
  const [connectionStatus, setConnectionStatus] = useState(true);
  const [isShowSideBarMenu, setIsShowSideBarMenu] = useState(false);
  const [token, setToken] = useState("");

  const toastAlert = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    background: "#454545",
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const loginAction = (userDataForLogin) => {
    fetch("https://apptest.bashiridev.ir/api/Account/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDataForLogin),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((result) => {
        setLogin(true);
        localStorage.setItem("user", result.token);
        setToken(result.token);
        setSiteLocation(getCurrentUrl());
      })
      .then((e) => {
        setLogin(true);
        route("/dashboard");
        reloadSite();
      })
      .catch((err) => {
        Swal.fire(
          "User Not Found!!",
          "Try Again ,  If You Sure Call To Site Admin",
          "error"
        );
      })
      .finally(() => {
        if (login) {
          toastAlert.fire({
            icon: "success",
            title: "Signed in successfully, Welcome",
          });
        }
      });
  };

  const reloadSite = () => {
    location.reload();
  };

  const handleRedirect = (route) => {
    if (route === "login") {
      location.replace("/login");
    } else if (route === "dashboard") {
      location.replace("/dashboard");
    }
  };

  // const logout = useCallback(() => {
  //   setToken(null);
  //   setUserInfos({});
  //   setIsLogin(false);
  //   localStorage.removeItem("user");
  // }, []);

  // const getUserInfosFromServer = (tokenData) => {
  //   fetch(`https://apptest.bashiridev.ir/api/Account/login`, {
  //     headers: {
  //       Authorization: `Bearer ${tokenData}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((userData) => {
  //       setIsLogin(true);
  //       setUserInfos(userData);
  //       console.log(userData);
  //     });
  // };

  // const chechIsUserLogin = (tokenData) => {
  //   fetch(`https://apptest.bashiridev.ir/api/Account/login`)
  //     .then((res) => res.json())
  //     .then((userData) => {
  //       setIsLogin(true);
  //       setUserInfos(userData);
  //       console.log(userData);
  //     });
  // };

  useEffect(() => {
    const localStorageData = localStorage.getItem("user")
    if (localStorageData) {
      fetch(`https://apptest.bashiridev.ir/api/Account/userinfo?authorization=${localStorageData}`)
        .then((res) => res.json())
        .then((userData) => {
          setLogin(true);
          setUserInfos(userData.userName);
          // console.log(userData);
        })
    } else {
      setLogin(false);
    }
  }, [loginAction, token]);

  window.addEventListener("offline", () => {
    setConnectionStatus(false);
  });

  window.addEventListener("online", () => {
    setConnectionStatus(true);
  });

  return (
    <>
      {siteLocation.includes("dashboard") ? (
        <SkylaxContext.Provider
          value={{
            login,
            setLogin,
            userInfos,
            setUserInfos,
            connectionStatus,
            setConnectionStatus,
            isShowSideBarMenu,
            setIsShowSideBarMenu,
            loginAction,
            reloadSite,
          }}
        >
          <Container fluid className="">
            {login ? (
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
                  if (res.isConfirmed) {
                    handleRedirect("login");
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
            {!login && (
              <Login
                path="/login"
                loginDataTransfer={(data) => loginAction(data)}
              />
            )}
            <Page404 path="/*" default />
          </Router>
        </>
      )}
    </>
  );
}
