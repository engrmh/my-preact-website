import { Alert, Button, Col, Image, Row } from "react-bootstrap";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Shortcut from "../../../Components/Shortcut/Shortcut.jsx";

export default function ShortCuts() {
  return (
    <Row className="mt-4">
      <Col xs={12} md={12} lg={12}>
        <div class="">
          <div class="p-3 d-flex justify-content-between align-items-center setShadow rounded bg-white mb-3">
            <span className="fs-5">Quick Access</span>
            <Button className="p-2 customBlue customBlueHover border-0 d-none">
              Add Shortcut
            </Button>
          </div>
          <div class="">
            {/*{rows.length === 0 ? (*/}
            {/*    <Alert variant="warning" className="text-center">*/}
            {/*        No Task Found. Please Add New Task*/}
            {/*    </Alert>*/}
            {/*) : (*/}
            {/*    */}
            {/*)}*/}
            <Row>
              <Shortcut
                title="Google"
                shortcutURL="google.com"
                url="https://google.com/search"
              />
              <Shortcut
                title="ChatGPT"
                shortcutURL="openai.com"
                url="https://chat.openai.com/"
              />
              <Shortcut
                title="Jobinja"
                shortcutURL="jobinja.ir"
                url="https://jobinja.ir/"
              />
              <Shortcut
                title="JobVision"
                shortcutURL="jobvision.ir"
                url="https://jobvision.ir/"
              />
              <Shortcut
                title="Ponisha"
                shortcutURL="ponisha.ir"
                url="https://ponisha.ir/dashboard"
              />
              <Shortcut
                title="SabzLearn"
                shortcutURL="sabzlearn.ir"
                url="https://sabzlearn.ir/"
              />
              <Shortcut
                title="TopLearn"
                shortcutURL="toplearn.com"
                url="https://toplearn.com/"
              />
              <Shortcut
                title="Rooket"
                shortcutURL="roocket.ir"
                url="https://roocket.ir/"
              />
              <Shortcut
                title="MUI"
                shortcutURL="mui.com"
                url="https://mui.com/"
              />
              <Shortcut
                title="Koushyar"
                shortcutURL="xn--mgbuh3fyx0g.com"
                url="https://xn--mgbuh3fyx0g.com/"
              />
              <Shortcut
                title="CVResume"
                shortcutURL="cvresume.ir"
                url="https://cvresume.ir/"
              />
              <Shortcut
                title="Zoom"
                shortcutURL="zoom.com"
                url="https://zoom.com"
              />
              <Shortcut
                title="Github"
                shortcutURL="github.com"
                url="https://github.com"
              />
              <Shortcut
                title="Gitlab"
                shortcutURL="gitlab.com"
                url="https://gitlab.com"
              />
              {/*<Shortcut title="" shortcutURL="" url="" />*/}
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
}
