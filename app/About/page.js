import React from 'react'
import HeaderImage from '../(components)/headerImage/headerImage'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div>
      <HeaderImage names="About Us"/>
      <section class="about-us">
        <div class="row">
            <div class="about-col">
                <h1>We are the world's largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                <Link href="#" class="hero_btn btn">EXPLORE NOW</Link>
            </div>
            <div class="about-col">
                <Image src="/images/about.png" width={400} height={400} alt=""/>
            </div>
        </div>
    </section>
    </div>
  )
}
