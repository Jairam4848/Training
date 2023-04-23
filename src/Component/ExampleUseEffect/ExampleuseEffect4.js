import React, { useEffect, useState } from 'react'
import Product_Card from './Product_Card'
import '../../App.css'

const ExampleuseEffect4 = () => {

    const[data,setData] = useState([])

    useEffect(()=>{
         Fetecheddata()
    },[])

     const Fetecheddata = () => {
        let response =  fetch('https://fakestoreapi.com/products')
        let productList =  response.json()
        setData(productList)
    }

    if(data.length == 0) {
        return(
            <h1>Feteching Data....</h1>
        )
    }

  return (
    <div className='product-list'>
        {data.map((eachitem)=>{
            <Product_Card {...eachitem} key={eachitem.id}/>
        })}
    </div>
  )
}

export default ExampleuseEffect4