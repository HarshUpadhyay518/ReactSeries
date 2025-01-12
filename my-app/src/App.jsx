// import NetflixSeries from "./components/NetflixSeries";
// import Profile from "./components/Profile";
// import "./components/Netflix.css";
// import "./components/Netflix.module.css";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventsProps";
import { DerivedState } from './components/derivedState';
import './components/EV.css';
// import { EventPropagation } from "./components/EventPropagation";
// import { State } from './components/hooks/State';

export const App = () =>{
  return( 
    <section className="container">
      {/* <h1 className="card-heading">List of best react series</h1> */}
      {/* <NetflixSeries/>  */}
      {/* <EventHandling/> */}
      {/* <EventProps/> */}
      {/* <EventPropagation/> */}
      {/* <State/> */}
      <DerivedState/>

  {/* // return <Profile/>; */}
    </section>
  );
};


// Export and import: default,named and mixed
// Looping in jsx : we use map
// props in jsx
// Event Handling
// Event Props : passing events as prop
// Event Propogation
// React States : useState hook
// Derived State in React