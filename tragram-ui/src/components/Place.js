import React,{useState} from 'react'
import {Input} from 'antd'


export default function Place({placeHandler}) {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
    placeHandler(value)
  };
  return (
    <div><Input value={value} onChange={onChange}/></div>
  )
}
