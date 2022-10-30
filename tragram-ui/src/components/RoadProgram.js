import React from "react";
import Time from "./Time";
import Place from "./Place";
import Transportation from "./Transportation";
import { Col, Divider, Row } from "antd";
export default function RoadProgram() {
  return (
    <>
      <Divider orientation="left">Road</Divider>
      <Row gutter={26}>
        <Col className="gutter-row" span={3}>
          <Time />
        </Col>
        <Col className="gutter-row" span={1}>
          -
        </Col>
        <Col className="gutter-row" span={3}>
          <Time />
        </Col>
        <Col className="gutter-row" span={2}>
          From
        </Col>
        <Col className="gutter-row" span={4}>
          <Place />
        </Col>
        <Col className="gutter-row" span={1}>
          To
        </Col>
        <Col className="gutter-row" span={4}>
          <Place />
        </Col>
        <Col className="gutter-row" span={2}>
          With
        </Col>
        <Col className="gutter-row" span={4}>
          <Transportation />
        </Col>
      </Row>
    </>
  );
}
