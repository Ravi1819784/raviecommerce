import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="main-about">
        {" "}
        <h2>About Us</h2>
                    <center><div className="line"></div></center>
        <p className="p1">
          Welcome to <b>ecart</b> – your one-stop destination for quality
          products and a seamless shopping experience! we started with a simple
          mission:{" "}
          <b>
            to deliver top-quality products at affordable prices, right to your
            doorstep.
          </b>{" "}
          From the beginning, we’ve believed in putting our customers first.
          That means reliable service, fast delivery, and 100% satisfaction.
          Whether you're looking for the latest fashion trends, tech gadgets,
          home essentials, or more – we've got something for everyone. Our
          hand-picked collections are carefully curated to meet the needs of
          modern shoppers like you. At <b>ecart</b>, we don’t just sell
          products. We build relationship
        </p>
        <div className="why-choose"> <h3>Why Choose Us?</h3>
        <ul>
          <li>✅ High-quality, curated products</li>
          <li>✅ Affordable pricing</li>
          <li>✅ Fast & secure delivery</li>
          <li>✅ Excellent customer support</li>
        </ul></div>
 
      </div>
    </>
  );
};

export default AboutUs;
