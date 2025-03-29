import React from 'react'
import "./Section.css"
import { Toggle1 } from '../../Components/Toggle1'
import Toggle from '../../Components/Toggle'

// import Cart from '../../Components/Cart'
// import Faq from '../Faq'

const Section = () => {
  return (
<>


<div className="tog2"  >
    {Toggle1.map((item)=><Toggle item={item}/>)}

</div>


</>
  )
}

export default Section
