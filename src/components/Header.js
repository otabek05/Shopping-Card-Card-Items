import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'



function Header() {
  return (
    <header className='header'>
        
        <h2 className='second'>Shopping Card</h2>
        <div>
            <a href='#'>Sign In</a>
        </div>
      
    </header>
  )
}

export default Header