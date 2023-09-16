import { Button, Col, Table } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add.js";
import DoneIcon from "@mui/icons-material/Done.js";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye.js";

export default function ProjectSection() {
  return (
    <Col xs={12} md={8} lg={8} className="mt-4 mb-4 mb-lg-0">
      <div className={`setShadow bg-white p-3 rounded`}>
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <span className="">Active Tasks</span>
          {/*<Button className="p-0 customBlue">*/}
          {/*    <AddIcon />*/}
          {/*</Button>*/}
        </div>
        <hr className="pb-2" />
        <div className="">
          <div class="">
            <Table striped hover>
              <thead>
                <tr className="table-danger">
                  <th>#</th>
                  <th>Name</th>
                  <th>Customer</th>
                  <th>Salary</th>
                  <th>Creator</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Test 1</td>
                  <td>John Doe</td>
                  <td>1.5 T</td>
                  <td>Mohammad</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Test 2</td>
                  <td>Lorem Ipsum</td>
                  <td>2 T</td>
                  <td>Ahmad</td>
                </tr>
                {/*<tr>*/}
                {/*  <td>3</td>*/}
                {/*  <td colSpan={2}>Larry the Bird</td>*/}
                {/*  <td>@twitter</td>*/}
                {/*</tr>*/}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </Col>
  );
}
