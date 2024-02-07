import React from 'react'
import HeaderImage from '../(components)/headerImage/headerImage'
import ContactUsComp from '../(components)/contactUsComp/contactUsComp'

export default function Contact() {
  return (
    <div>
      <HeaderImage names="Contact Us"/>
      <section class="loacation">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111989.31313237658!2d77.32498792347556!3d28.699635117457326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1630495771496!5m2!1sen!2sin"
            width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
    </section>
    <section class="contact-us">
        <div class="row">
            <div class="content-col">
              <ContactUsComp icon="fa fa-home" heading="NH9 Road, ABC Building" text="Faisalabad, Punjab, Pakistan"/>
              <ContactUsComp icon="fa fa-phone" heading="+92 3015566104" text="Monday To Saturday, 9AM To 6PM"/>
              <ContactUsComp icon="fa fa-envelope" heading="uzairaslam990@email.com" text="Email Us Yor Query"/>
            </div>
            <div class="content-col">
                
                    <input type="text" placeholder="Enter Name" required/>
                    <input type="email" placeholder="Enter Email" required/>
                    <input type="text" placeholder="Enter Subject" required/>
                    <textarea rows="8" placeholder="Message" required></textarea>
                    <button type="submit" class="hero_btn btn">Send Message</button>
                
            </div>
        </div>
    </section>
    </div>
  )
}
