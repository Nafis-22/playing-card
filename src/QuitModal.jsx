import React, { useContext, useEffect } from 'react'
import { Deck } from './ContextApi'
import './Quit.css'
const QuitModal = () => {
  const { gamequit, setGamequit } = useContext(Deck);
  const { score, setScore } = useContext(Deck);
  const { cards, setCards } = useContext(Deck);
const change=()=>{
   setGamequit(false);
   
  }

  return (
    <>
      <div className="quit-page-background">
        <div className='quit'>
          <div className="finalscore">
            <p>Your Score :- {score}</p>
            <div className="text">
              <p>Are you sure you want to quit</p>
              <button onClick={change}>Restart Game</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuitModal