import React, { useState } from 'react'
import Header from './Header/Header'
import Section from './Section/SEction'
import Footer from './Footer/Footer'
import Card from '../Components/Card'
import Category from '../Components/Category'
import Key from './Footer/Key'


const Home = ({todo}) => {
  const [see,setSee]=useState(false)
  const text= "hgfkjdghjfgh gjhgfdjgd gfdjkghfldgd fhyddgjfh.gnfdgn bghkgthyg hkjh;klgh lh  ";
  return (
  <>
  
  <Header/>

<Category/>

  <Card todo={todo}/>
  




<div style={{display:"flex", alignItems:"center",marginBlock:"20px",justifyContent:"center",flexDirection:"column",gap:"10px"}}>

  <p>{see? text:`${text.slice(0,50)}...`}</p>

  <button onClick={()=>{setSee(!see)}}>{see ? 'SeeLess':'SeeMore'}</button>
  
</div>




<Section  />

  
  <Footer/>

  <Key/>
  </>
  )
}

export default Home
