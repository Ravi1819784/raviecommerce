import React from 'react'
import "./Contact.css"
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
  <>
  
          <div className="contact">
            <h2>Contact us</h2>
            <center>            <div className="line"></div></center>

            <div className="email"><MdOutlineEmail className="email-icon" /> : ravisingh17200@gmail.com</div>
            <div className="whatsapp"><FaWhatsapp className="whatsapp-icon" /> : 7828618763</div>
            <div className="mobile"><FaPhoneAlt className="mobile-icon" /> : 7828618763</div>
          </div>
            
  </>
  )
}

export default Contact

