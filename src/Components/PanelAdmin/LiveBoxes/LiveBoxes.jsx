import { Row } from "react-bootstrap";
import LiveBox from "./LiveBox/LiveBox.jsx";
import HandymanIcon from "@mui/icons-material/Handyman";
import GroupIcon from "@mui/icons-material/Group";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TaskIcon from "@mui/icons-material/Task";
import { useEffect } from "preact/hooks";
import { gsap } from "gsap";

export default function LiveBoxes() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.in",
        },
      });
      tl.to(".liveBoxGsap", {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        stagger: 0.3,
      });
    });
    // return ctx.revert()
  }, []);
  return (
    <>
      <Row className="p-2 mb-3">
        <LiveBox
          link="/dashboard/projects"
          title="Projects"
          count="1"
          containerClass="liveBoxGsap"
          classData="customBlack"
        >
          <HandymanIcon />
        </LiveBox>
        <LiveBox
          link="/dashboard/users"
          title="Users"
          count="1"
          containerClass="liveBoxGsap"
          classData="customRed"
        >
          <GroupIcon />
        </LiveBox>
        <LiveBox
          link="/dashboard/tasks"
          title="Tasks"
          count="1"
          containerClass="liveBoxGsap"
          classData="customGreen"
        >
          <TaskIcon />
        </LiveBox>
        <LiveBox
          link="/dashboard/notifs"
          title="Notifications"
          count="1"
          containerClass="liveBoxGsap"
          classData="customBlue"
        >
          <NotificationsIcon />
        </LiveBox>
      </Row>
    </>
  );
}
