import React from 'react'

const Product_Card = ({title, price, image, rating}) => {
  return (
    <div className='card'>
        <img src={image}/>
        <p>{title}</p>
        <p>{price}</p>
        <p>{rating}</p>
    </div>
  )
}

export default Product_Card