import { Button, Card, Col } from "react-bootstrap";
import "./ProjectBox.css";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function ProjectBox({
  name,
  getClass,
  link = "/portfolio",
  image = "./img/projectSamplePic.jpg",
  customer,
  description,
  creator,
  imageName,
  projectTechnologies
}) {
  return (
    <Col xs={12} md={6} lg={6} className={getClass}>
      <div class="p-4 d-flex justify-content-center align-items-center projectBox">
        <Card style={{ width: "100%" }} className="px-1">
          <div className="d-flex justify-content-between align-items-center">
            <Card.Title className="mb-4 ps-2 d-flex align-items-center">
              <span className="me-1">
                <VerifiedIcon className="customBlueFont flasher" />
              </span>
              <span className="fs-4 fw-bold text-center">{name}</span>
            </Card.Title>
            <div class="projectBoxImgBox rounded w-25">
              <Card.Img
                variant="top"
                className="rounded projectBoxImg"
                src={image}
              />
            </div>
          </div>
          <Card.Body>
            <h5 className="text-center border-bottom border-2 border-dark pb-2 mb-4">
              More Info
            </h5>
            <h5 className="mb-4">
              <span className="fw-bold customRedFont">Creator: </span>
              <span className="">{creator}</span>
            </h5>
            <h5 className="mb-4">
              <span className="fw-bold customRedFont">Customer: </span>
              <span className="">{customer}</span>
            </h5>
            <h5 className="mb-4 d-flex align-items-start">
              <span className="fw-bold customRedFont me-2">Technologies Used: </span>
              <span className="">{projectTechnologies}</span>
            </h5>
            <h5 className="mb-4 d-flex align-items-start">
              <span className="fw-bold customRedFont me-2">Description: </span>
              <span className="">{description}</span>
            </h5>
            {/* <a
              href={link}
              className="text-decoration-none btn btn-dark d-flex justify-content-center align-items-center mb-2"
              style={{ marginTop: "1rem" }}
            >
              Show More
            </a> */}
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
}
