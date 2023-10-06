import React from "react";
import { Col, Image } from "react-bootstrap";

export default function Shortcut({ url, title, shortcutURL }) {
  return (
    <Col xs={6} md={4} lg={2}>
      <a
        href={url}
        className="d-flex align-items-center setShadow rounded bg-white ps-1 pe-3 py-2 text-black text-decoration-none mb-3"
        target="_blank"
      >
        <Image
          // src={`http://www.google.com/s2/favicons?domain=${"google.com"}`}
          src={`https://api.companyurlfinder.com/logo/${shortcutURL}`}
          height={40}
          className="rounded-circle"
        />
        <span className="ms-2" style={{ fontSize: "14px" }}>
          {title}
        </span>
      </a>
    </Col>
  );
}
