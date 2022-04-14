import { useState,useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
// import {counterr} from "./components/counter";

function App() {

const [count, setCount] = useState(0);

 
  useEffect(()=>{
     let id= setInterval(()=>{
          setCount((prev_value)=>{
         
            if(prev_value>=20){
              clearInterval(id);
              return 20;
            }
           
              return prev_value+1;
          });
      },1000);
  },[])


  return (
    <div className="App">
   
  
   <h3>count: {count}</h3>
{/*             
  <button onClick={()=>{
    setShow(!show);
  }}>{show ? "hide" : "show" } Counter</button> */}
  
    </div>
  );

}



export default App;
