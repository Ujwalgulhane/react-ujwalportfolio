import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPycharm,
  SiSublimetext
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSublimetext />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
