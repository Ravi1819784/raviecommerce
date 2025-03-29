import React from 'react'

import {Link} from "react-router-dom"
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import "./Nav.css"

// import NavLinks from './NavLinks';
const Nav = () => {

  return (
   <>
   
   <div className="main-nav" >
    <nav className='nav'
    
    >
        <div className="left-nav">ECART</div>
        <div className="right"><ul className='nav-links'>
          
          {/* <Link to ="/men"><li>MEN</li></Link> */}
{/* 
          <NavLinks/> */}
    <Link to="/gadget"><li>GADGET</li></Link>
    <Link to="/fashion"><li>FASHION</li></Link>

    <Link to="Cart"><li><BsCart2 className='eCart' /></li></Link>
  
  <Link to="/profile"><li><CgProfile className='navprofile' />
  </li></Link>

  <li className="admin"><Link to='/admin'> </Link></li> 
     </ul></div>
    
    </nav>
   </div>
   </>
  )
}

export default Nav
