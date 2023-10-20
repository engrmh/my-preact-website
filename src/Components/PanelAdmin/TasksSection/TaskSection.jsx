import { Button, Col } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DoneIcon from "@mui/icons-material/Done";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "preact/hooks";
import { getAllTasksFromServer } from "../../../Redux/Stores/Tasks";

export default function TaskSection() {
  const allTaskFromServer = useSelector((state) => state.tasks);
  const [allTasks, setAllTasks] = useState([]);
  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getAllTasksFromServer());
    await setAllTasks(allTaskFromServer);
  });
  return (
    <Col xs={12} md={4} lg={4} className="mt-4 mb-4 mb-lg-0">
      <div class={`setShadow bg-white p-3 rounded`}>
        <div class="mb-3 d-flex justify-content-between align-items-center">
          <span className="">Active Tasks</span>
          {/* <Button className="p-0 customBlue">
            <AddIcon />
          </Button> */}
        </div>
        <hr className="pb-2" />
        {allTasks.slice(0, 6).map((tasks , index) => (
          <div class="" key={index}>
            <div class="customBlack text-white py-2 px-3 mb-2 rounded-2 d-flex align-items-center justify-content-between">
              <span class="overflow-hidden text-nowrap">{tasks.title}</span>
              {/* <div class="d-flex align-items-center gap-1 ms-3">
                <Button className="p-1 customGreen border-0">
                  <DoneIcon />
                </Button>
                <a
                  // href={`/dashboard/currentTask/1`}
                  className="p-1 bg-info rounded text-white"
                >
                  <RemoveRedEyeIcon />
                </a>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </Col>
  );
}
