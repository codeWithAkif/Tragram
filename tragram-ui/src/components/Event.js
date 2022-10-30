import React,{useState} from 'react'
import {Input} from 'antd'

export default function Event({eventHandler}) {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
    eventHandler(value)
  };
  return (
    <div><Input value={value} onChange={onChange}/></div>
  )
}
