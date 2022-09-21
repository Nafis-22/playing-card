import React, { useContext } from 'react'
import Cards from './Cards';
import { Deck } from './ContextApi';
import './App.css'

const Ans = () => {
    const {userarr,setUserarr} = useContext(Deck);
  
    return (
    <>
    <div>Ans below:-</div>
    {
     userarr.map((item,index)=>{
        return(
       <>
         <div className='card'>
          <div className='logo'>{item.suit}</div>           
          </div>  
       </>
        ) 
      })


     
         
    }
    </>
  )
}

export default Ans