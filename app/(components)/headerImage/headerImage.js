import React from 'react'
import Navbar from '../navbar/navbar'

export default function HeaderImage(props) {
  return (
    <div>
      <section className="Sub-header">
        <Navbar/>
        <h1>{props.names}</h1>
    </section>
    </div>
  )
}
