import React from 'react'
import {Input} from 'antd'


export default function Place({place}) {
  const onChange = (e) => {
    place=e.target.value;
  }
  return (
    <div><Input onChange={onChange}/></div>
  )
}
