import React from 'react'

export default function ContactUsComp(props) {
    return (
        <div>
            <i className={props.icon}></i>
            <span>
                <h5>{props.heading}</h5>
                <p>{props.text}</p>
            </span>
        </div>
    )
}
