import React from "react";
import Time from "./Time";
import Place from "./Place";
import Event from "./Event";
import { Col, Divider, Row } from "antd";
export default function EventProgram(event) {
  return (
    <>
      <Divider orientation="left">Event</Divider>
      <Row gutter={16}>
        <Col className="gutter-row" span={3}>
          <Time timeHandler ={event.startTime}/>
        </Col>
        <Col className="gutter-row" span={1}>
          -
        </Col>
        <Col className="gutter-row" span={3}>
          <Time timeHandler ={event.endTime}/>
        </Col>
        <Col className="gutter-row" span={2}>
          where
        </Col>
        <Col className="gutter-row" span={4}>
          <Place placeHandler = {event.place}/>
        </Col>
        <Col className="gutter-row" span={2}>
          What
        </Col>
        <Col className="gutter-row" span={4}>
          <Event eventHandler={event.eventName}/>
        </Col>
      </Row>
    </>
  );
}
