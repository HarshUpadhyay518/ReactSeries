import './index.css';
import { useEffect, useState } from 'react';


export const CleanUpFunction =() =>{
    const [count,setCount] = useState(0);

    useEffect(() =>{
        const timer = setInterval(()=>{
            setCount((prev) =>prev+1);
        },1000);
        return ()=> clearInterval(timer);
    },[]);

    return(
        <div className='container'>
            <div className='counter'>
                <p>My Subscribers on youtube</p>
                <div className='odometer' id='odometer'>
                    {count}
                </div>
                <h3 className='title'>
                    Subscriber <br /> Realtime Counter
                </h3>
            </div>
        </div>
    );
};