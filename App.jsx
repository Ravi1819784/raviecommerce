
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
// import Men from './Components/Men'
import Contact from './Components/Contact'
import Cart from './Components/Cart'
import Home from './Home/HOme'
import Admin from './Components/Admin'
import { useEffect, useState } from 'react'
import Gadget from './Components/Gadget'
import Fashion from './Components/Fashion'
import Profile from './Components/Profile'
import { BsTypeH1 } from 'react-icons/bs'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Forget from './Components/Forget'
// import MyCart from './Components/MyCart'


function App() {

// const [cartItem,setcartItem]=useState([])

const [products,setProducts]=useState(null)
const[todo,setTodo]=useState([])
const[contact,setContact]=useState([])
// const[section,setSection]=useState([])
const[imgg,setImgg]=useState("")

  function click(name,price,pi){


  //  if(sp=="Home"){
  //     console.log(`this is home ${sp}`)
  //     console.log(sp)


 // }
 
//   if(pic){

//     const imm=URL.createObjectURL(pic)
    
// const temp=[...todo,{name,price,buy,imm}]
// setTodo(temp)
// localStorage.setItem("dt",JSON.stringify(temp))

//   }

if(pi){
  const  im=URL.createObjectURL(pi)
  const temp=[...todo,{name,price ,imgg:im}]
  setTodo(temp)
     localStorage.setItem("dt",JSON.stringify(temp))
}

//  const temp=[...todo,{name,price }]
//  setTodo(temp)
//    localStorage.setItem("dt",JSON.stringify(temp))
// alert("hello")

  }

    // else if (sp=="Section"){

    //   if(pic){
    //     const imm=URL.createObjectURL(pic)
    //     const temp=[...section,{sp,name,price,img:imm,buy}]
    //     setSection(temp)
    //     localStorage.setItem("sc",JSON.stringify("temp"))
    //   }
    // }

  //   else{
  //     console.log(`this is else ${sp}`)
  //   }
  // }



  useEffect(()=>{
    const a=JSON.parse(localStorage.getItem("dt"))
  
    if(a){
      setTodo(a)
    }

    // const s=JSON.parse(localStorage.getItem("sc"))

    // if(s){
    //   setHome(s)
    // }

  },[])


// function carti (item){
//   const vt=[...cartItem,item]
//   setcartItem(vt)
// }




const getProducts=async()=>{

  let result=await fetch ("https://reqres.in/api/products")
  result =await result .json();
  setProducts(result);
  console.log(result.page)
  
}


console.log()

// useEffect(()=>{

//   getProducts()

 
// })
// {products.map((item)=>{console.log(`this  is map${item}`)})}

// console.log(`thisi s${products.data}`)


  return (
    <>



{/* {products.map((item) => <h1>{item.page}</h1>)} */}



<BrowserRouter>

{/* {todo.map((item)=><>{item.price}  {item.name}</>)} */}
{/* {todo.map((item)=><>
    <div className="main-card1">
<div className="card1">

    <div className="card11">
<img src={item.img} alt="" />
<center><h2 className='product-name'>{item.name}</h2></center>


<div className="product-price"><h3 className='price'>₹{item.price}</h3>
<button className='buy'>{item.buy}</button></div>
    </div>
</div>
    </div>
</>)} */}

<Nav />
<Routes>
  <Route path="/admin"element={<Admin click={click}/>}/>
{/* <Route path="/men" element={<Men/>}/> */}
<Route path="/profile" element={<Profile/>}/>
<Route path="/gadget" element={<Gadget/>}/>
<Route path="/fashion" element={<Fashion/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<SignUp/>}/>
<Route path="/forgetPassword" element={<Forget/>}/>
<Route path="/Cart" element={<Cart/>}/>
{/* <Route path="/mycart" element={<MyCart />}/> */}
<Route path="/" element={<Home todo={todo} />}/>
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App
