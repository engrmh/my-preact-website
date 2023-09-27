import { Alert, Button, Col, Row } from "react-bootstrap";

export default function Analytics() {
  let rows = [];

  return (
    <Row className="mt-4">
      <Col xs={12} md={12} lg={12}>
        <div class="">
          <div class="p-3 d-flex justify-content-between align-items-center setShadow rounded bg-white mb-3">
            <span className="fs-5">Analytics</span>
            <Button
              className="p-2 customBlue customBlueHover border-0"
              disabled
            >
              Update Data
            </Button>
          </div>
          <div class="p-3 setShadow rounded bg-white">
            {rows.length === 0 ? (
              <Alert variant="warning" className="text-center">
                This section is under construction. Go Back Later
              </Alert>
            ) : (
              <div class=""></div>
            )}
          </div>
        </div>
      </Col>
    </Row>
  );
}
