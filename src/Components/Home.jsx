import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Home() {
    const[state,setState]=useState([])

    useEffect(()=>{
        fakestore()
    })

    function fakestore(){
        axios.get("https://fakestoreapi.com/products")
         .then((res)=>{
            setState(res.data)
            console.log(res.data)
         })
    }

  return (
    <>
    <h1> Fake Store</h1>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"12px",padding:"20px"}}>
        
        {state.map((el,i)=>(
            <div style={{width:"250px",border:"1px solid black",padding:"15px"}}>
                <h4>{el.title}</h4>
                <img style={{width:"150px"}} src={el.image} alt="" /> <br /> 
                <h4>{el.description}</h4>


               <Link to={`/cart/${el.id}`}> <button >Add To Cart</button></Link>
            </div> 
        ))}
        
    </div>
    </>

  )
}
