import Image from "next/image";
import Navbar from "./(components)/navbar/navbar";
import HeadingAndText from "./(components)/headingAndText/headingAndText";
import TextCard from "./(components)/textCard/textCard";
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
          <a href="#" className="hero_btn">Visit Us To Know More</a>
        </div>
      </section>
      <section className="course">
        <HeadingAndText headingBeforeBreak="EXPLORE OUR 60+" headingAfterBreak=" MAJOR PROGRAMS" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit" />
        <div className="row">
          <TextCard heading="Graduate Programs" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non."/>
          <TextCard heading="Undergraduate Programs" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non."/>
          <TextCard heading="Adult Learning & Degree Completion" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non."/>
        </div>
      </section>
      <section className="campus">
          <HeadingAndText headingBeforeBreak="TAKE OUR VIRTUAL TOUR" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit"/>
      </section>
    </div>
  );
}
