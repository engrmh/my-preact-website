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

export function App() {
  const location = getCurrentUrl();
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [projects, setProjects] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState(true);
  const [isShowSideBarMenu, setIsShowSideBarMenu] = useState(false);
  const supabase = createClient(
    "https://ujrsoyxcmijpfnzctkok.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqcnNveXhjbWlqcGZuemN0a29rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3MjI4ODIsImV4cCI6MjAxMDI5ODg4Mn0.ZK2RZzNPPH_OgmTdp2tcmJgCMyWhwNxwvGqJ2W69l8Q"
  );

  useEffect(() => {
    getAllProjects();
    // console.log(projects);
    // console.log(isShowSideBarMenu);
  }, []);

  const getAllProjects = async () => {
    const { data } = await supabase.from("projects").select("*");
    await setProjects(data);
  };

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
            supabase,
            connectionStatus,
            setConnectionStatus,
            isShowSideBarMenu,
            setIsShowSideBarMenu,
          }}
        >
          <Container fluid className="">
            <Row>
              <Col lg={2}>
                <SideBar />
                <SideBarOffCanvas />
              </Col>
              <Col xs={12} md={12} lg={10}>
                <div class="">
                  <TopBar />
                </div>
                <div class="">
                  <Router>
                    <Dashboard path="/dashboard" />
                    <Projects path="/dashboard/projects" />
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
