import { Row } from "react-bootstrap";
import LiveBox from "./LiveBox/LiveBox.jsx";
import HandymanIcon from "@mui/icons-material/Handyman";
import GroupIcon from "@mui/icons-material/Group";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TaskIcon from "@mui/icons-material/Task";
import { gsap } from "gsap";
import { useEffect, useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjectFromServer } from "../../../Redux/Stores/Projects.jsx";
import { getAllUsersFromServer } from "../../../Redux/Stores/Users.jsx";
import { getAllTasksFromServer } from "../../../Redux/Stores/Tasks.jsx";

export default function LiveBoxes() {
  const dispatch = useDispatch();
  const [allProject, setAllProject] = useState([]);
  const [allUser, setAllUser] = useState([]);
  const [allTask, setAllTask] = useState([]);
  const allProjectFromServer = useSelector((state) => state.projects);
  const allUserFromServer = useSelector((state) => state.users);
  const allTasksFromServer = useSelector((state) => state.tasks);
  // const allNotifsFromServer = useSelector((state) => state.notifs);

  useEffect(() => {
    dispatch(getAllProjectFromServer());
    dispatch(getAllUsersFromServer());
    dispatch(getAllTasksFromServer());
    setAllProject(allProjectFromServer);
    setAllUser(allUserFromServer);
    setAllProject(allTasksFromServer);
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
