import Image from 'next/image'
import React from 'react'

export default function ImageCard(props) {
  return (
    
            <div class="campus-col">
                <Image src={props.ImagePath} width={500} height={500} alt=""/>
                <div class="layer">
                    <h3>{props.text}</h3>
                </div>
            </div>
  )
}
