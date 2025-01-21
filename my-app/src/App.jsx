// import NetflixSeries from "./components/NetflixSeries";
// import Profile from "./components/Profile";
// import "./components/Netflix.css";
// import "./components/Netflix.module.css";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventsProps";
// import { DerivedState } from './components/derivedState';
import './components/EV.css';
import { ShortCircuitExample } from './components/ShortCircuitEvaluation';
// import { LiftingState } from './components/LiftStateUp';
// import { ToggleSwitch } from './projects/ToggleSwitch/ToggleSwitch';
// import { EventPropagation } from "./components/EventPropagation";
// import { State } from './components/hooks/State';

// import { Todo } from "./projects/TodoWebsite/Todo";

export const App = () =>{
  return( 
    <section className="container">
      {/* <h1 className="card-heading">List of best react series</h1> */}
      {/* <NetflixSeries/>  */}
      {/* <EventHandling/> */}
      {/* <EventProps/> */}
      {/* <EventPropagation/> */}
      {/* <State/> */}
      {/* <DerivedState/> */}
      {/* <LiftingState/> */}
      {/* <ToggleSwitch/> */}
      {/* <Todo/> */}
      <ShortCircuitExample/>

  {/* // return <Profile/>; */}
    </section>
  );
};