import { useContext, useEffect, useState } from "react";
import { Deck } from "./ContextApi";
import './App.css'
import QuitModal from './QuitModal'

import Header from "./Header";


export default function Home() {
  const { gamequit, setGamequit } = useContext(Deck);
  const { score, setScore } = useContext(Deck);

  const { cards, setCards } = useContext(Deck);

  const [userarr, setUserarr] = useState([]);
  const[showarr,setShowarr]=useState(false);
  var newarr = [];
 

  var a = cards.slice(0, 12);
  var b = cards.slice(0, 8);
  var c = cards.slice(0, 13);
  var d = cards.slice(0, 14);
  var e = cards.slice(0, 5);

   {
    gamequit && <QuitModal/>
   }

 useEffect(()=>{
 if(!gamequit){
  setScore(0);
 }

  setUserarr([]);
 },[gamequit])

useEffect(()=>{
  if(userarr.length>=5 ){
    
    if(showarr){
      setTimeout(()=>{
        setUserarr([]);
      },2000)
    
    }
   }
  
},[showarr,userarr])
 



  const show = () => {
 setShowarr(true);
  if(userarr.length<=0){
    alert("you can only draw 5 cards in a round");
  }

    let black = 0;
    let red = 0;
    for (let i = 0; i < userarr.length; i++) {
      let obj1 = userarr[i].color;
      if (obj1 === "Black") {
        black++;
      }else if( obj1=="Red"){
        red++;
      }
    }
    console.log(black);
    console.log(red);


    if (black >= red) {
      let ans = black - red;
      setScore(ans);
    } else {
      let ans = red - black;
      setScore(ans);
    }

  }

  const draw1 = () => {
    var randomnum = Math.floor(Math.floor(Math.random() * 12));
    const results = a.filter(obj => {
      return obj.id != randomnum;
    });
    if(results.length===0){
      setGamequit(true);
      return;
    }
    if(userarr.length>=4){
      alert("You can Only Draw 5 cards at time");
      setUserarr([])
    }
    a = results;

    var obj1 = a[randomnum];
    newarr.push(obj1)
    setUserarr([...userarr, obj1]);
    console.log(obj1);

  }


  const draw2 = () => {
    var randomnum = Math.floor(Math.floor(Math.random() * 8));
    const results = b.filter(obj => {
      return obj.id != randomnum;
    });
    if(userarr.length>=5){
      alert("You can Only Draw 5 cards at time")
    }
    b = results;
    if(results.length===0){
      setGamequit(true);
      return;
    }
    var obj1 = b[randomnum];
    newarr.push(obj1)
    setUserarr([...userarr, obj1]);



  }



  const draw3 = () => {
    var randomnum = Math.floor(Math.floor(Math.random() * 13));
    const results = c.filter(obj => {
      return obj.id != randomnum;
    });
    if(results.length===0){
      setGamequit(true);
      return;
    }
    if(userarr.length>=5){
      alert("You can Only Draw 5 cards at time")
    }
    c = results;

    var obj1 = c[randomnum];
    newarr.push(obj1)
    setUserarr([...userarr, obj1]);



  }



  const draw4 = () => {
    var randomnum = Math.floor(Math.floor(Math.random() * 14));
    const results = d.filter(obj => {
      return obj.id != randomnum;
    });
    if(results.length===0){
      setGamequit(true);
      return;
    }
    if(userarr.length>=5){
      alert("You can Only Draw 5 cards at time")
    }
    d = results;

    var obj1 = d[randomnum];
    newarr.push(obj1)
    setUserarr([...userarr, obj1]);


  }




  const draw5 = () => {
    var randomnum = Math.floor((Math.random() * 5));
    const results = e.filter(obj => {
      return obj.id != randomnum;
    });
   
    
    if(results===0){
      setGamequit(true);
      return;
    }
    if(userarr.length>=5){
      alert("You can Only Draw 5 cards at time")
    }
    e = results;
   
    var obj1 = e[randomnum];
    newarr.push(obj1)
    setUserarr([...userarr, obj1]);


  }

  return (
    <>
      {gamequit ? <QuitModal /> :

        <div className="main">
          <Header />


          <div className="sections">
            <div className="section1">


              <button onClick={draw1}>draw</button>
            </div>
            <div className="section1">


              <button onClick={draw2}>draw</button>
            </div>
            <div className="section1">


              <button onClick={draw3} >draw</button>
            </div>
            <div className="section1">


              <button onClick={draw4}>draw</button>
            </div>
            <div className="section1">


              <button onClick={draw5}>draw</button>
            </div>

            <div className="score">
              <p id="score-text">score:-{score}</p>
              <button onClick={show}>show</button>
            </div>
          </div>


          <div className="ans">



            {

              userarr?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className='card'>
                      <div className='logo'>{item.suit}</div>
                      <div className='logo2'>{item.rank}</div>
                      <div className='logo1'>{item.suit}</div>
                    </div>

                  </div>
                )
              })
            }
          </div>
        </div>
      }
    </>
  );
}
