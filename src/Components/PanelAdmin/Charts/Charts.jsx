import { Row } from "react-bootstrap";
import Chart from "./Chart/Chart.jsx";

export default function Charts() {
  return (
    <>
      <Row className="p-2">
        <Chart
          chartClass="customRed"
          // chartData={}
          // chartKey={}
          chartType="line"
          title="Projects"
          desc="Count of Done Project/Monthly"
          updatedAt="Updated 3 Days Ago"
        />
        <Chart
          chartClass="customGreen"
          // chartData={}
          // chartKey={}
          chartType="bar"
          title="Views"
          desc="Website views performance"
          updatedAt="Updated 3 Days Ago"
        />
        <Chart
          chartClass="customBlack"
          // chartData={}
          // chartKey={}
          chartType="line"
          title="Tasks"
          desc="Count of Done Tasks/Weekly"
          updatedAt="Updated 30 Min Ago"
        />
      </Row>
    </>
  );
}
