import Image from 'next/image'
import React from 'react'

export default function FacilitiesCard(props) {
  return (
    
      <div class="facilities-col">
                <Image src={props.source} width={200} height={200} alt=""/>
                <h3>{props.heading}</h3>
                <p>{props.paragragh}
                </p>
            </div>
    
  )
}
