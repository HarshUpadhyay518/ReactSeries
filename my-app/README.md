# What we have learned in this series -->
<br>
// Export and import: default,named and mixed
<br>
// Looping in jsx : we use map
<br>
// props in jsx
<br>
// Event Handling
<br>
// Event Props : passing events as prop
<br>
// Event Propogation
<br>
// React States : useState hook
<br>
// Derived State in React
<br>
// Lifting the state up in react

// Project 1.0 : ToggleSwitch
<br> 
// Project 1.1 : Todo App 

// Keys in react very important
 
// Short Circuit Evaluation : It involves (&&,||,??) and how they evaluate expressions based on the truthiness of their operands.

* Logical OR(||) : Syntax : expression1 || expression2
Rule : If expression1 is truthy,return expression1. Otherwise,return expression2.

* Logical AND(&&) : Syntax : expression1 && expression2
Rule : If expression1 is falsy,return expression1. Otherwise return expression2.

* Nullish Coalesscing(??) : Syntax : expression1 ?? expression2
Rule : If expression1 is not null or undefined,return expression1. Otherwise,return expression2.

# Hooks rules in react -->

* Hooks let you use different react features from your components.
* It starts with use ___.(useState,useEffects,useReducer).
* Hooks can only be used at the top level of your component.
* Do not call Hooks inside loops,conditions,or nested functions.
* Call hooks only from React function components or custom hook. Do not call Hooks from regular javaScript functions or in class components.

# useState() -->

It is a fundamental hook in react that allows you to add state management to your functional components. It lets you store and updates values that change over time,enabling dynamic and interactive user interfaces.

    *Syntax : const[count,setCount] = useState(0);
        where *const => variable (key)
              *count => state variable (The current state value)
              *setCount => A function that updates the state variable
              *useState => The initial value of the state 

# Controlled Component -->

* Controlled component in react are those where form data is handled by react componrnt state.

# This means : 

* State Mansgement : The value of the input field is controlled by react state(useState or this.state in class components.)

* Event Handlers : Changes to the input field(like typing into a text field) are handled by react event handlers(onChange,onBlur,etc.).

* State Updates : When the user interacts with the form input,react state is updated the event handlers,and the input value reflects the current state value.

# Uncontrolled Component -->

* Uncontrolled components are those where form data is handled by the DOM itself.

# This means : 

* Direct DOM Manipulation : The value of the input field is controlled by the DOM(document.getElementById,etc.). It's not declarative way right.

* Event Handling : Changes are directly handled by DOM events(onChange,onBlur,etc.).

* Accessing Form Data : Form data is accessed through refs or DOM traversal methods,not through react state.


<!-- Handling Forms in react  -->

* useEffect hook in react : It is used fotr handling side effects in functional components.

* Syntax : useEffect(() => {
               // Your side effect code here
               
               return () =>{
                // Cleanup code here(optional)
               };
            },[dependencies]);

* Note : 
1. Initial Render : When the component mounts useEffect can run its effect function to perform operations like data fetching.

2. Dependencies : The second argument, an array of dependencies,which determines when the effect should re-run. If any value in this array changes,the effect will re-run.

3. CleanUp : useEffect can return a cleanup function to clean up after the effect,such as unusubscribing from an event or clearing a timer.
