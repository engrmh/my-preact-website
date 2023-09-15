import { Row } from "react-bootstrap";
import LiveBox from "./LiveBox/LiveBox.jsx";
import HandymanIcon from "@mui/icons-material/Handyman";
import GroupIcon from "@mui/icons-material/Group";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TaskIcon from "@mui/icons-material/Task";

export default function LiveBoxes() {
  return (
    <>
      <Row className="p-2">
        <LiveBox title="Projects" count="1" classData="customBlack">
          <HandymanIcon />
        </LiveBox>
        <LiveBox title="Users" count="1" classData="customRed">
          <GroupIcon />
        </LiveBox>
        <LiveBox title="Task" count="1" classData="customGreen">
          <TaskIcon />
        </LiveBox>
        <LiveBox title="Notifications" count="1" classData="customBlue">
          <NotificationsIcon />
        </LiveBox>
      </Row>
    </>
  );
}
