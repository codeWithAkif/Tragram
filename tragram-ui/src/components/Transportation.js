import React, { useState } from "react";
import { Input, Select, Space, Row, Col } from "antd";
const { Option } = Select;

export default function Transportation({handleVehicle}) {
  const [vehicle, setVehicle] = useState("Otobüs");

  const onChange = (e) => {
    setVehicle(e.target.value);
    handleVehicle(vehicle);
  };
  return (
    <>
      <Row gutter={24}>
        <Col className="gutter-row" span={12}>
          <Space>
            <Select value={vehicle} onChange={onChange}>
              <Option value="Otobüs">Otobüs</Option>
              <Option value="Vapur">Vapur</Option>
              <Option value="Yaya">Yaya</Option>
              <Option value="Araba">Araba</Option>
            </Select>
          </Space>
        </Col>
       
      </Row>
    </>
  );
}
