import { Row } from "react-bootstrap";
import LiveBox from "./LiveBox/LiveBox.jsx";
import HandymanIcon from "@mui/icons-material/Handyman";
import GroupIcon from "@mui/icons-material/Group";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TaskIcon from "@mui/icons-material/Task";
import { gsap } from "gsap";
import { useEffect, useState } from "preact/hooks";

export default function LiveBoxes() {
  const [allProject, setAllProject] = useState(0);
  const [allUser, setAllUser] = useState(0);
  const [allTask, setAllTask] = useState(0);
  const [allNotifs, setAllNotifs] = useState(0);

  useEffect(() => {
    fetch("https://apptest.bashiridev.ir/api/Projects/GetProjects")
      .then((res) => res.json())
      .then((data) => setAllProject(data.length));
    fetch("https://apptest.bashiridev.ir/api/User")
      .then((res) => res.json())
      .then((data) => setAllUser(data.length));
    fetch("https://apptest.bashiridev.ir/api/Task/GetTasks")
      .then((res) => res.json())
      .then((data) => setAllTask(data.length));
    fetch("https://apptest.bashiridev.ir/api/Notifications/GetNotifications")
      .then((res) => res.json())
      .then((data) => setAllTask(data.length));
  }, []);
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
          count={allProject}
          containerClass="liveBoxGsap"
          classData="customBlack"
        >
          <HandymanIcon />
        </LiveBox>
        <LiveBox
          link="/dashboard/users"
          title="Users"
          count={allUser}
          containerClass="liveBoxGsap"
          classData="customRed"
        >
          <GroupIcon />
        </LiveBox>
        <LiveBox
          link="/dashboard/tasks"
          title="Tasks"
          count={allTask}
          containerClass="liveBoxGsap"
          classData="customGreen"
        >
          <TaskIcon />
        </LiveBox>
        <LiveBox
          link="/dashboard/notifs"
          title="Notifications"
          count="0"
          containerClass="liveBoxGsap"
          classData="customBlue"
        >
          <NotificationsIcon />
        </LiveBox>
      </Row>
    </>
  );
}
