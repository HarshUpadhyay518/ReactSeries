// Export and import: default,named and mixed
// Looping in jsx : we use map
// props in jsx
// Event Handling
// Event Props : passing events as prop
// Event Propogation
// React States : useState hook
// Derived State in React
// Lifting the state up in react

// Project 1.0 : ToggleSwitch 
// Project 1.1 : Todo App 

// Keys in react very important
 
// Short Circuit Evaluation : It involves (&&,||,??) and how they evaluate expressions based on the truthiness of their operands.

* Logical OR(||) : Syntax : expression1 || expression2
Rule : If expression1 is truthy,return expression1. Otherwise,return expression2.

* Logical AND(&&) : Syntax : expression1 && expression2
Rule : If expression1 is falsy,return expression1. Otherwise return expression2.

* Nullish Coalesscing(??) : Syntax : expression1 ?? expression2
Rule : If expression1 is not null or undefined,return expression1. Otherwise,return expression2.

<!-- Hooks rules in react -->
* Hooks let you use different react features from your components.
* It starts with use ___.(useState,useEffects,useReducer).
* Hooks can only be used at the top level of your component.
* Do not call Hooks inside loops,conditions,or nested functions.
* Call hooks only from React function components or custom hook. Do not call Hooks from regular javaScript functions or in class components.