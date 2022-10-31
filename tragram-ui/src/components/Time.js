import React from "react";
import { TimePicker } from "antd";
import moment from "moment";

export default function Time({setValue}) {
  const onChange = (time, timeString) => {
    setValue=timeString;
  };
  return (
    <TimePicker
      onChange={onChange}
      defaultValue={moment("00:00:00", "HH:mm:ss")}
    />
  );
}
