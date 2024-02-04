import React from 'react'

export default function BlogCard(props) {
    return (
        <div>
            <span>{props.name}</span>
            <span>{props.number}</span>
        </div>
    )
}
