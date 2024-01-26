import Image from "next/image";
import Navbar from "./(components)/navbar/navbar";
export default function Home() {
  return (
    <div>
      <section className="header">
      <Navbar/>
        <div className="text_box">
        
            <h2>GET READY</h2>
            <p id="headtext">TO DISCOVER CAMPUS</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                <br/> esse blanditiis in quae perspiciatis quo.
            </p>
            <a href="#" className="hero_btn">Visit Us To Know More</a>
        </div>
    </section>
    </div>
  );
}
