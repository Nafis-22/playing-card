import React, { useContext } from 'react'
import './App.css'
import { Deck } from './ContextApi'


const Header = () => {
 const{gamequit,setGamequit}=useContext(Deck);

  
  return (
    <div className='header'>
    <p>Card Game</p>
    <span><button  onClick={()=>{setGamequit(true)}}>Quit</button></span>
    </div>
  )
}

export default Header