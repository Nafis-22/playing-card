
import Ans from './Ans';
import './App.css';
import Deck from './ContextApi';
import Home from './Home';
import './App.css'
import { useState } from 'react';





function App() {
 const[game,setGame]=useState(false);


 const change=()=>{
 setGame(true);

 }
  return (
    <div className="App">
       
       {game ? <Home/>:  
      <div  className='gamescreen'>
       <div className='game-modal'>
       <p>Press Enter to play the Game</p>
       <button onClick={change}>Play Now</button>
       </div>
       </div>            
       }
      
        
    </div>
    
     
  );
}

export default App;
