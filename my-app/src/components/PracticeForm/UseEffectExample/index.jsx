import { useEffect, useState } from "react";
import "./index.css";

export const UseEffectExample =() =>{
    const [count,setCount] = useState(0);
    useEffect(() =>{
        console.log("Count Value : ",count);
    },[count]);
    return(
        <div>
            <h1>useEffect Hook</h1>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};