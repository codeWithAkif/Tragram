import React, { useState } from "react";
import { Input, TimePicker, Button, Modal } from "antd";
import { Col, Divider, Row } from "antd";
import moment from "moment";

export default function EventProgram({
  addEvent,
  isModalOpen,
  cancelEventModal,
}) {
  const [eventValue, setEventValue] = useState("");
  const [placeValue, setPlaceValue] = useState("");
  const [startValue, setStartValue] = useState("");
  const [endValue, setEndValue] = useState("");

  const onEventChange = (e) => {
    setEventValue(e.target.value);
  };
  const onPlaceChange = (e) => {
    setPlaceValue(e.target.value);
  };
  const onEndChange = (time, timeString) => {
    setEndValue(timeString);
  };
  const onStartChange = (time, timeString) => {
    setStartValue(timeString);
  };

  const AddEvent = () => {
    const data = {
      startTime: startValue,
      endTime: endValue,
      place: placeValue,
      eventName: eventValue,
    };
    addEvent(data);
  };

  return (
    <>
      <Modal
        width={1000}
        open={isModalOpen}
        okText="Add"
        onOk={AddEvent}
        onCancel={cancelEventModal}
      >
        <Divider orientation="left">Event</Divider>
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
            where
          </Col>
          <Col className="gutter-row" span={4}>
            <Input value={placeValue} onChange={onPlaceChange} />
          </Col>
          <Col className="gutter-row" span={2}>
            What
          </Col>
          <Col className="gutter-row" span={4}>
            <Input value={eventValue} onChange={onEventChange} />
          </Col>
        </Row>
      </Modal>
    </>
  );
}
