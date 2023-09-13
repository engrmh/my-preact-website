import { Button, Card, Col } from "react-bootstrap";
import "./ProjectBox.css";

export default function ProjectBox({
  title = "title",
  getClass,
  link = "/portfolio",
  image = "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
}) {
  return (
    <Col xs={12} md={4} lg={4} className={getClass}>
      <div class="p-4 d-flex justify-content-center align-items-center projectBox">
        <Card style={{ width: "18rem" }} className="px-1">
          <div class="projectBoxImgBox rounded">
            <Card.Img
              variant="top"
              className="rounded projectBoxImg"
              src={image}
            />
          </div>
          <Card.Body>
            <Card.Title className="text-center">{title}</Card.Title>
            <a
              href={link}
              className="text-decoration-none btn btn-dark d-flex justify-content-center align-items-center"
              style={{ marginTop: "1rem" }}
            >
              Show More
            </a>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
}
