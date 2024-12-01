import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsWindows } from "react-icons/bs";
import {
  SiVisualstudiocode,
  SiPostman,
  SiLaragon,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <BsWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaragon />
      </Col>
    </Row>
  );
}

export default Toolstack;
