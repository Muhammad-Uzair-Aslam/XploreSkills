import React from 'react'

export default function HeadingAndText(props) {
  return (
    <div>
       <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>{props.headingBeforeBreak} <br/>{props.headingAfterBreak}</h1>
        <p>{props.text}</p>
         
    </div>
  )
}
