import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function Cart() {
    const[data,setData]=useState({})
    const {id}=useParams()
    

    useEffect(()=>{
        fetchdata()
    })

    function fetchdata(){
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
            setData(res.data)
            console.log(res.data)
        })

    }
  return (
    <div style={{width: "350px",
  margin: "50px auto",
  padding: "20px",
  border: "1px solid #ddd",
  textAlign: "center",
}}>
         <h1>{data.title}</h1> <br />
         <img style={{width:"200px"}} src={data.image} alt="" /> 
    </div>
  )
}
