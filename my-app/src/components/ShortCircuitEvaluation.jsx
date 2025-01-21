import { useState } from "react";

 export const ShortCircuitExample = () =>{
    const [isLoggedIn,setIsLoggedIn] = useState(true);
    const [user,setUser] = useState("");
    
    return(
        <section className="container short-container">
            <h1>Welcome to the ShortCircuit Evaluation</h1>

            {/* Conditional rendering using short circuit evaluation  */}
            { isLoggedIn && <p>You are logged in!</p>}

            {/* Another example of ShortCircuit evaluation */}
            {user ? `Hello ${user}` :"You are logged in!"}

            <div className="grid-three-cols">
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
                <button onClick={() => setUser("Harsh Upadhyay")}>Set User</button>
                <button onClick={() => setUser("")}>Clear User</button>
            </div>
        </section>
    );
};
