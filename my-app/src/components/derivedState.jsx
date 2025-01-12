import { useState } from "react";

export const DerivedState = () =>{
    const [users] = useState([
        { name: "Alice", age: 25},
        { name: "Harsh", age: 30},
        { name: "Xyzzz", age: 35},
    ]);

    // Derived State: count of users
    console.log(users);
    const usersCount = users.length;

    // Derived state: average age of users
    const averageAge = users.reduce((accum,curElem) => accum + curElem.age,0) / usersCount;

    return(
        <div className="main-div">
            <h1>Users List</h1>
            <ul>
                {users.map((users,index) =>(
                    <li key={index}>
                       {users.name} - {users.age} years old
                    </li>
                ))}
            </ul>
            <p>Total Users: {usersCount}</p>
            <p>Average Age: {averageAge}</p>
        </div>
    );
};