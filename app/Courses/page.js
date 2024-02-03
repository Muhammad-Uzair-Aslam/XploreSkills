import React from 'react'
import HeaderImage from '../(components)/headerImage/headerImage'
import TextCard from '../(components)/textCard/textCard'
import FacilitiesCard from '../(components)/facilitiesCard/facilitiesCard'

export default function Courses() {
  return (
    <div>
      <HeaderImage names="Our Courses" />
      <section class="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
          <TextCard heading="Graduate Programs" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non." />
          <TextCard heading="Undergraduate Programs" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non." />
          <TextCard heading="Adult Learning & Degree Completion" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non." />
        </div>
      </section>
      <section class="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div class="row">
          <FacilitiesCard source="/images/course1.png" heading="Web Development" paragragh="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam."/>
          <FacilitiesCard source="/images/course2.png" heading="Artificial Intelligence" paragragh="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam."/>
          <FacilitiesCard source="/images/course3.png" heading="Data Science" paragragh="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam."/>
          </div>
          </section>
    </div>
  )
}
