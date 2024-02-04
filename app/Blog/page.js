import React from 'react'
import HeaderImage from '../(components)/headerImage/headerImage'
import Image from 'next/image'
import BlogCard from '../(components)/blogCard/blogCard'

export default function Blog() {
  return (
    <div>
      <HeaderImage names="Our Posts"/>
      <section class="blog-content">
        <div class="row">
            <div class="blog-left">
                <h2>Our Certificate & Online Program</h2>
                <h5>Aug 1, 2021</h5>
                <Image src="/images/post.png" alt="" width={300} height={300}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor consequatur, nobis quae obcaecati delectus at aspernatur, placeat quasi iure mollitia. Repellendus a ut nostrum dolore velit odit cumque, quos doloribus sint id aperiam eius aliquam quo modi sequi rem quia exercitationem laborum, ratione expedita! Deleniti velit officia incidunt illum.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                    incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                    aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                    ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                    facilis?</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                    incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                    aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                    ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                    facilis?</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                    incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                    aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                    ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                    facilis?</p>

                <div class="comment-box">
                    <h3>Leave a Comment</h3>
                    <div class="comment-form">
                        <input type="text" placeholder="Enter Name" required/>
                        <input type="email" placeholder="Enter Email" required/>
                        <textarea rows="5" placeholder="Your Comment"></textarea>
                        <button type="submit" class="hero_btn btn">POST COMMENT</button>
                    </div>
                </div>
                </div>

            <div class="blog-right">
                <h3>Post Categories</h3>
                <BlogCard name="Business Analytics" number="12"/>
                <BlogCard name="Machine Learning" number="29"/>
                <BlogCard name="Computer Science" number="15"/>
                <BlogCard name="Data Analytics" number="22"/>
                <BlogCard name="Full Stack" number="20"/>
            </div>
        </div>
    </section>

    </div>
    
  )
}
