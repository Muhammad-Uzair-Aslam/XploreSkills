import React from 'react'

export default function TextCard(props) {
  return (
    <div className="course-col">
                <h3>{props.heading}</h3>
                <p>{props.text}</p>
            </div>
  )
}
