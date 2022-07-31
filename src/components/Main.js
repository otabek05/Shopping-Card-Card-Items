import React from 'react'
import Product from './Product'

function Main(props) {
    const {products,onAdd}=props
  return <main className='mainpart'>
    <div className='products'>
        {products.map((product)=>(
            <Product key={product.id} onAdd={onAdd} product={product} />
        ))}
    </div>
  </main>
}

export default Main