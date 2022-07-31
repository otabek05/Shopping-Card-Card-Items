import React from 'react'

function Product(props) {
    const {product,onAdd}=props
  return (
    <div className='products'>
        <div className='single-product'>
       <img className='img-small' src={product.image}></img>
       <p>${product.price}</p>
       <span>{product.title}</span>
       <div className='btn'>
        <button onClick={()=>onAdd(product)} >Add to Card</button>
        </div>
       </div>
    </div>
  )
}

export default Product