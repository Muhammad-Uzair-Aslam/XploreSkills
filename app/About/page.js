import React from 'react'
import HeaderImage from '../(components)/headerImage/headerImage'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../(components)/button/button'

export default function About() {
  return (
    <div>
      <HeaderImage names="About Us"/>
      <section className="about-us">
        <div className="row">
            <div className="about-col">
                <h1>We are the world's largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                
                <Button textButton="EXPLORE NOW" classname="hero_btn btn"/>
            </div>
            <div className="about-col">
                <Image src="/images/about.png" width={400} height={400} alt=""/>
            </div>
        </div>
    </section>
    </div>
  )
}
