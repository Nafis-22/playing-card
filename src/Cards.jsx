import React from 'react'
import './App.css'
const Cards = (props) => {
  return (
    <div className='card'>
          <div className='logo'>♥</div>
            {props.item.suit}
          </div>  
  )
}

export default Cards