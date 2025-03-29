// import React, { useState } from 'react'
// import { links } from './MyLinks'
// import { Link } from 'react-router-dom'
// import "./NavLinks.css"
// const Navlinks = () => {
// const [heading,setHeading]=useState("")
// const [subHeading,setSubHeading]=useState("")
//   return (
//  <>
//  {links.map((link)=>(<div> 

// <div className="main">

// <h1 onClick={()=>{heading !==link.name ? setHeading(link.name):setHeading("");
//     setSubHeading("")
// }}>
    
//     {link.name}

// </h1>
// {link.submenu && (
//     <div>
// <div className="product-list" >

// <div>
// <div className="cross"></div>
// </div>

//     <div className="list">

// {link.sublinks.map((mysublinks)=>(
//     <div>

// <h1>
//     {mysublinks.Head}
// </h1>
// {mysublinks.sublink.map((slink)=>(

//     <li>
// <Link to={slink.link}>{slink.name}</Link>
//     </li>
// ))}

//     </div>
// ))}

//     </div>
// </div>

//     </div>
// )}

// </div>

//  </div>))}

 
//  </>
//   )
// }

// export default Navlinks
