import React, { createContext, useEffect, useState } from 'react'
export const Deck= createContext([]);


const ContextApi = ({children}) => {
  
    // const [userarr,setUserarr]=useState([]);
    const [cards, setCards] = useState([]);
    const[gamequit,setGamequit]=useState(false);
     const[score,setScore]=useState(0);
     
  var suits = ["♥", "♠", "♣", "♦"];
  var colors = ["Red", "Black", "Black", "Red"];
  var ranks = [ "A", "2","3","4","5","6","7","8","9","10","J","Q","K"];

  useEffect(() => {
    let k=0;
    var deck = [];
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        k++;
        deck.push({   
           id:k,
          suit: suits[i],
          rank: ranks[j],
            color: colors[i]
        }); 
      }
    } 


     for(let i=0;i<52;i++){
      var temcard=deck[i];
      var randomindex=Math.floor(Math.random()*52);
      deck[i]=deck[randomindex];
      deck[randomindex]=temcard;
     }
    
    
     console.log(deck);


    setCards(deck);



    
   
  }, [gamequit]);


  return (
    <Deck.Provider value={{cards,setCards,gamequit,setGamequit,score,setScore}}>
     {children}
     </Deck.Provider>
  )
}

export default ContextApi