import { Col } from "react-bootstrap";
import NewChart from "../../../NewChart/NewChart.jsx";
import "./Chart.css";
import ScheduleIcon from "@mui/icons-material/Schedule";

export default function Chart({
  title,
  desc,
  updatedAt,
  containerClass,
  chartClass,
  chartType,
  chartData,
  chartKey,
}) {
  return (
    <Col xs={12} md={4} lg={4} className="mt-4 mb-3 mb-lg-0">
      <div
        class={`setShadow bg-white p-2 d-flex flex-column justify-content-center align-items-center rounded text-decoration-none text-black ${containerClass}`}
      >
        <div className={`chartContainer rounded ${chartClass}`}>
          <NewChart
            chartType={chartType}
            chartData={chartData}
            chartKey={chartKey}
          />
        </div>
        <div class="pb-3 d-flex flex-column align-self-start ps-4">
          <span class="mb-1">{title}</span>
          <span class="text-secondary" style={{ fontSize: "0.8rem" }}>
            {desc}
          </span>
          <span
            class="text-secondary d-flex align-items-center gap-1 mt-4"
            style={{ fontSize: "0.8rem" }}
          >
            <ScheduleIcon style={{ fontSize: "1rem" }} />
            {updatedAt}
          </span>
        </div>
      </div>
    </Col>
  );
}
