import { Col } from "react-bootstrap";
import "./LiveBox.css";
export default function LiveBox({ title, count, classData, children }) {
  return (
    <Col xs={12} md={3} lg={3} className="mt-4">
      <div class="setShadow bg-white p-2 d-flex justify-content-between align-items-center rounded">
        <div
          class={`d-flex align-items-center justify-content-center p-3 rounded-3 liveBoxIcon text-white ${classData}`}
        >
          {children}
        </div>
        <div class="">
          <h5 class="">{title}</h5>
          <h6 class="text-end">{count}</h6>
        </div>
      </div>
    </Col>
  );
}