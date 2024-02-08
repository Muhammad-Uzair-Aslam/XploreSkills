import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button className={props.classname}>{props.textButton}</button>
    </div>
  )
}
