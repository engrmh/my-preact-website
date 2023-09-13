import "./Portfolio.css";
import NavBar from "../../Components/Navbar/Navbar.jsx";
import { Col, Container, Row } from "react-bootstrap";
import ProjectBox from "../../Components/ProjectBox/ProjectBox.jsx";
import { useEffect } from "preact/hooks";

export default function Portfolio() {
  return (
    <div className="portfolioContainer">
      <div class="">
        <NavBar active="portfolio" />
      </div>
      <Container class="mb-2">
        <h3 className="text-white text-center my-5 fw-bold fst-italic">
          The projects I did or participated in
        </h3>
        <Row>
          <ProjectBox />
          <ProjectBox />
          <ProjectBox />
          <ProjectBox />
        </Row>
      </Container>
    </div>
  );
}
