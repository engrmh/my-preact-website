import { Button, Col } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DoneIcon from "@mui/icons-material/Done";

export default function TaskSection() {
  return (
    <Col xs={12} md={4} lg={4} className="mt-4 mb-4 mb-lg-0">
      <div class={`setShadow bg-white p-3 rounded`}>
        <div class="mb-3 d-flex justify-content-between align-items-center">
          <span className="">Active Tasks</span>
          <Button className="p-0 customBlue">
            <AddIcon />
          </Button>
        </div>
        <hr className="pb-2" />
        <div class="">
          <div class="customBlack text-white py-2 px-3 mb-2 rounded-2 d-flex align-items-center justify-content-between">
            <span class="overflow-hidden text-nowrap">test for see</span>
            <div class="d-flex align-items-center gap-1 ms-3">
              <Button className="p-1 customGreen border-0">
                <DoneIcon />
              </Button>
              <Button className="p-1 bg-info border-0">
                <RemoveRedEyeIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}
