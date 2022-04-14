import { useEffect, useState } from "react";
 function counterr(){
    const [count, setCount] = useState(10);

   
    useEffect(()=>{
        setInterval(()=>{
            setCount((prev_value)=>{
                console.log(prev_value)
                return prev_value-1;
            });
        },1000);
    },[])

    return (
         
             <h3>count: {count}</h3>
             
    )
}
export default counterr;