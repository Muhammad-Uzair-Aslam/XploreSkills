import Image from "next/image";
import Navbar from "./(components)/navbar/navbar";
import HeadingAndText from "./(components)/headingAndText/headingAndText";
import TextCard from "./(components)/textCard/textCard";
import ImageCard from "./(components)/imageCard/imageCard";
import campus1 from "../public/images/Campus1.png"
import campus2 from "/public/images/Campus2.png"
import campus3 from "/public/images/Campus3.png"
import FacilitiesCard from "./(components)/facilitiesCard/facilitiesCard";
import Testimonial from "./(components)/testimonial/testimonial";
import Link from "next/link";
import Button from "./(components)/button/button";
export default function Home() {
  return (
    <div>
      <section className="header">
        <Navbar />
        <div className="text_box">

          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          <Button textButton="Visit us to know more" classname="hero_btn"/>
        </div>
      </section>
      <section className="course">
        <HeadingAndText headingBeforeBreak="EXPLORE OUR 60+" headingAfterBreak=" MAJOR PROGRAMS" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit" />
        <div className="row">
          <TextCard heading="Graduate Programs" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non." />
          <TextCard heading="Undergraduate Programs" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non." />
          <TextCard heading="Adult Learning & Degree Completion" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non." />
        </div>
      </section>
      <section className="campus">
        <HeadingAndText headingBeforeBreak="TAKE OUR VIRTUAL TOUR" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit" />
        <div className="row">
          <ImageCard ImagePath={campus1} text="DEHLI" />
          <ImageCard ImagePath={campus2} text="HYDERABAD" />
          <ImageCard ImagePath={campus3} text="MUMBAI" />
        </div>
      </section>
      <section className="facilities">
        <HeadingAndText headingBeforeBreak="Our Facilities" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit." />
        <div className="row">
          <FacilitiesCard source="/images/libary.png" heading="Best Library" paragragh="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam." />
          <FacilitiesCard source="/images/playground.png" heading="Athletics" paragragh="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam." />
          <FacilitiesCard source="/images/food.png" heading="Tasty and Healthy Food" paragragh="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam." />
        </div>
      </section>
      <section class="testimonials">
        <HeadingAndText headingBeforeBreak="What our Student says" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. " />
        <div className="row">
          <Testimonial studentName="Uzair Aslam" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a deserunt. In quia repellat maxime." source="/images/user.png" />
          <Testimonial studentName="Ali Hasan" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a deserunt. In quia repellat maxime." source="/images/user.png" />
        </div>
      </section>
      <section class="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <Button textButton="CONTACT US" classname="hero_btn"/>
    </section>
    </div>
  );
}
