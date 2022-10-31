import React, { useState } from "react";
import { Input, TimePicker, Modal } from "antd";
import { Col, Divider, Row } from "antd";
import moment from "moment";

export default function RoadProgram({
  addRoad,
  isModalOpen,
  cancelRoadModal,
}) {
  const [transportationValue, setTransportationValue] = useState("");
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [startValue, setStartValue] = useState("");
  const [endValue, setEndValue] = useState("");

  const onTransportationChange = (e) => {
    setTransportationValue(e.target.value);
  };
  const onToChange = (e) => {
    setToValue(e.target.value);
  };
  const onFromChange = (e) => {
    setFromValue(e.target.value);
  };
  const onEndChange = (time, timeString) => {
    setEndValue(timeString);
  };
  const onStartChange = (time, timeString) => {
    setStartValue(timeString);
  };

  const AddRoad = () => {
    const data = {
      startTime: startValue,
      endTime: endValue,
      from:fromValue,
      to: toValue,
      transportation: transportationValue,
    };
    addRoad(data);
  };

  return (
    <>
      <Modal
        width={1000}
        open={isModalOpen}
        okText="Add"
        onOk={AddRoad}
        onCancel={cancelRoadModal}
      >
        <Divider orientation="left">Road</Divider>
        <Row gutter={16}>
          <Col className="gutter-row" span={3}>
            <TimePicker
              onChange={onStartChange}
              defaultValue={moment("00:00:00", "HH:mm:ss")}
            />
          </Col>
          <Col className="gutter-row" span={1}>
            -
          </Col>
          <Col className="gutter-row" span={3}>
            <TimePicker
              onChange={onEndChange}
              defaultValue={moment("00:00:00", "HH:mm:ss")}
            />
          </Col>

          <Col className="gutter-row" span={2}>
            From
          </Col>
          <Col className="gutter-row" span={4}>
            <Input value={fromValue} onChange={onFromChange} />
          </Col>
          <Col className="gutter-row" span={2}>
            To
          </Col>
          <Col className="gutter-row" span={4}>
            <Input value={toValue} onChange={onToChange} />
          </Col>
          <Col className="gutter-row" span={2}>
            With
          </Col>
          <Col className="gutter-row" span={4}>
            <Input value={transportationValue} onChange={onTransportationChange} />
          </Col>
        </Row>
      </Modal>
    </>
  );
}
