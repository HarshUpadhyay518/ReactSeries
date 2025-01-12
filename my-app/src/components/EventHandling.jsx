import "./EV.css";
export const EventHandling =() =>{

    // function handleButtonClick(){
    //     alert("Hey I am onClick Event");
    // }

    const handleButtonClick = (event) =>{
        console.log(event);
        // console.log(event.target);
        console.log(event.type);
        alert("Hey I am onClick Event");
    };
    const handleWelcomeUser = (user) =>{
        console.log(`Hey ${user}, Welcome`);
        
    }

    return(
        <>
        {/* Function components with named functions */}
          <button onClick={handleButtonClick}>Click Me</button>
          <br />
          <br />
          <button onClick={() => handleButtonClick()}>Click Me</button>
          <br />
          <br />
          {/* Passing arguments to event handlers */}
          <button onClick={() => handleWelcomeUser("Harsh")}>Click me</button>
        </>
    );
};