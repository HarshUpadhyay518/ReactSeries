import { useEffect, useState } from "react";
import "./index.css";

export const UseEffectExample =() =>{
    const [count,setCount] = useState(0);
    const[name,setName] = useState("");

    // useEffect(() =>{
    //     console.log(count);
    // },[count]);

    useEffect(() => {
        document.title = `count: ${count}`;
    },[count]);

    useEffect(() =>{
        console.log(name);
    },[name]);

    return(
        <div className="container">
            <h1>useEffect Hook Challenge</h1>
            <p>count: <span>{count}</span></p>
            <button className="btn" onClick={() => setCount(count + 1)}>Increment</button>
            <p>Name: <span>{name}</span></p>
            <input type="text" 
                   value={name} 
                   onChange={(e) => setName(e.target.value)}/>
        </div>
    );
};