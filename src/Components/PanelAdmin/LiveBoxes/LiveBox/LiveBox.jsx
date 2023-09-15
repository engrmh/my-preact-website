import { Col } from "react-bootstrap";
import "./LiveBox.css";
export default function LiveBox({
  link,
  title,
  count,
  containerClass,
  classData,
  children,
}) {
  return (
    <Col xs={12} md={3} lg={3} className="mt-4">
      <a
        href={link}
        class={`setShadow liveBox bg-white p-2 d-flex justify-content-between align-items-center rounded text-decoration-none text-black ${containerClass}`}
      >
        <div
          class={`d-flex align-items-center justify-content-center p-3 rounded-3 liveBoxIcon text-white ${classData}`}
        >
          {children}
        </div>
        <div class="">
          <h5 class="">{title}</h5>
          <h6 class="text-end">{count}</h6>
        </div>
      </a>
    </Col>
  );
}
