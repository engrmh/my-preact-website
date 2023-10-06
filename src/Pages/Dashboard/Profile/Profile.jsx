import { Alert, Button, Col, Image, Row } from "react-bootstrap";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Shortcut from "../../../Components/Shortcut/Shortcut.jsx";
import { AccountCircle } from "@mui/icons-material";

export default function Profile() {
  return (
    <Row className="mt-4">
      <Col xs={12} md={12} lg={12}>
        <div class="">
          <div class="p-3 d-flex justify-content-between align-items-center setShadow rounded bg-white mb-3">
            <span className="fs-5">Profile</span>
          </div>
          <div class="p-3 d-flex justify-content-center align-items-center setShadow rounded bg-white mb-3">
            {/*{rows.length === 0 ? (*/}
            {/*    <Alert variant="warning" className="text-center">*/}
            {/*        No Task Found. Please Add New Task*/}
            {/*    </Alert>*/}
            {/*) : (*/}
            {/*    */}
            {/*)}*/}
            <div class="d-flex flex-column align-items-center">
              <AccountCircle className="mb-3" />
              <h4>Mohammad Hosein SalimBahrami</h4>
              <span>Frontend Developer (React / Preact)</span>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
