import "./Portfolio.css";
import NavBar from "../../Components/Navbar/Navbar.jsx";
import { MrMiyagi } from "@uiball/loaders";
import { Col, Container, Row } from "react-bootstrap";
import ProjectBox from "../../Components/ProjectBox/ProjectBox.jsx";
import { useEffect, useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjectFromServer } from "../../Redux/Stores/Projects";

export default function Portfolio() {
  const [allProject, setAllProject] = useState([]);
  const allProjectFromServer = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(async () => {
    await dispatch(getAllProjectFromServer());
    await setAllProject(allProjectFromServer);
  }, []);

  return (
    <div className="portfolioContainer">
      <div class="">
        <NavBar active="portfolio" />
      </div>
      <Container class="mb-2">
        <h3 className="text-white text-center my-5 fw-bold fst-italic d-flex flex-column">
          <span className="">The projects I did or participated in</span>
          <span className="">
            You Can Access To My Project From{" "}
            <a
              href="https://github.com/engrmh"
              className="text-white text-decoration-none"
              target="_blank"
            >
              My GitHub
            </a>
          </span>
        </h3>
        {allProject.length !== 0 ? (
          <Row>
            {allProject.map((project, index) => (
              <ProjectBox key={index} {...project} />
            ))}
          </Row>
        ) : (
          <>
            <div className="d-flex justify-content-center align-items-center">
              <MrMiyagi size={35} lineWeight={3.5} speed={1} color="#fff" />
              <span className="ms-2 text-white">Loading...</span>
            </div>
          </>
        )}
      </Container>
    </div>
  );
}
