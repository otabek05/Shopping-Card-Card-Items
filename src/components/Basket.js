import React from 'react'

function Basket(props) {
    const {cartItems,onAdd,onRemove}=props
    const itemPrice=cartItems.reduce((a,c)=>a+c.price*c.qty,0)
  return <aside className='aside'>
  <h2>Card Items</h2>
  <div>{cartItems.length ===0 && <div className='empty'>Cart is empty</div>}</div>
  {cartItems.map((item)=>(
    <div key={item.id} className='items' >
        <img className='img-basket' src={item.image} />
        <div className='title'>{item.category}</div>
        <div className='btns'>
        <button onClick={()=>onAdd(item)} className='add' >+</button>
        <button  onClick={()=>onRemove(item)} className='remove' >-</button>
        </div>
        <div className='prc'>Num:{item.qty}</div>
        <div className='price' >Price: ${item.price}</div>
         
         <div>
        </div>
    </div>
    

  ))}

{cartItems.length !==0 &&(
        <>
        <hr />
        <h4>Total Price:${itemPrice.toFixed(2)}</h4>
        <button className='buying'>Buying</button>
        </>
    )}
  </aside>
}

export default Basket