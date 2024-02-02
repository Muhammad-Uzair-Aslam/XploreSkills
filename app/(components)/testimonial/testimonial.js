import Image from 'next/image'
import React from 'react'

export default function Testimonial(props) {
  return (
    <div class="testimonials-col">
                <Image src={props.source} width={300} height={300} alt="oo.."/>
                <div>
                    <p>{props.text}</p>
                    <h3>{props.studentName}</h3>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
            </div>
  )
}
