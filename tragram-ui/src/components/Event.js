import React, { useState } from "react";
import { Input } from "antd";

const Event = ({ addEvent }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onBlur = () => {
    addEvent(value);
  };
  return (
    <div>
      <div></div>
      <Input value={value} onChange={onChange} onBlur={ onBlur }  />
    </div>
  );
};
export default Event;
