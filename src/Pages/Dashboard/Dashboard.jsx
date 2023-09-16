import LiveBoxes from "../../Components/PanelAdmin/LiveBoxes/LiveBoxes.jsx";
import Charts from "../../Components/PanelAdmin/Charts/Charts.jsx";
import { Row } from "react-bootstrap";
import TaskSection from "../../Components/PanelAdmin/TasksSection/TaskSection.jsx";
import ProjectSection from "../../Components/PanelAdmin/ProjectSection/ProjectSection.jsx";

export default function Dashboard() {
  return (
    <div>
      <LiveBoxes />
      <Charts />
      <Row className="p-2">
        <ProjectSection />
        <TaskSection />
      </Row>
    </div>
  );
}
