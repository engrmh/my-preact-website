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
          chartType="bar"
          title="Projects"
          desc="Count of Done Project/Monthly"
          updatedAt="Updated 3 Days Ago"
        />
        <Chart
          chartClass="customGreen"
          // chartData={}
          // chartKey={}
          chartType="bar"
          title="Projects"
          desc="Count of Done Project/Monthly"
          updatedAt="Updated 3 Days Ago"
        />
        <Chart
          chartClass="customBlack"
          // chartData={}
          // chartKey={}
          chartType="bar"
          title="Projects"
          desc="Count of Done Project/Monthly"
          updatedAt="Updated 30 Min Ago"
        />
      </Row>
    </>
  );
}
