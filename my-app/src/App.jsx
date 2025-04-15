// import NetflixSeries from "./components/NetflixSeries";
// import Profile from "./components/Profile";
// import "./components/Netflix.css";
// import "./components/Netflix.module.css";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventsProps";
// import { DerivedState } from './components/derivedState';
// import './components/EV.css';
// import './index.css';
// import { ContactForm } from './components/PracticeForm/ContactForm';
// import { LoginForm } from './components/PracticeForm/LoginForm';
// import { RegistrationForm } from './components/hooks/RegistrationForm';
// import { ShortCircuitExample } from './components/ShortCircuitEvaluation';
// import { LiftingState } from './components/LiftStateUp';
// import { ToggleSwitch } from './projects/ToggleSwitch/ToggleSwitch';
// import { EventPropagation } from "./components/EventPropagation";
// import { State } from './components/hooks/State';

import { BioProvider } from "./components/hooks/ContextAPI";
import { Home } from "./components/hooks/ContextAPI/home";

// import { ParentComponent } from "./components/PropDrilling";

// import { ReactUseEffect } from "./components/hooks/UseEffect";
// import { CleanUpFunction } from "./components/hooks/UseEffect/CleanUpFunction/CleanUpFunction";
// import { UseEffectExample } from "./components/PracticeForm/UseEffectExample";

// import { Todo } from "./projects/TodoWebsite/Todo";
// eslint-disable-next-line no-unused-vars
// import {UseRefHook} from "./components/hooks/useRefHook/demo";
// import { ForwardRefs } from "./components/hooks/useRefHook/ForwardRefs";
// import {UseId} from "./components/hooks/UseID/index.jsx";



export const App = () =>{
  return( 
    <>
    <BioProvider>
      <Home />
    </BioProvider>
    </>
    // <section className="container">
      // {/* <h1 className="card-heading">List of best react series</h1> */}
      // {/* <NetflixSeries/>  */}
      // {/* <EventHandling/> */}
      // {/* <EventProps/> */}
      // {/* <EventPropagation/> */}
      // {/* <State/> */}
      // {/* <DerivedState/> */}
      // {/* <LiftingState/> */}
      // {/* <ToggleSwitch/> */}
      // {/* <Todo/> */}
      // {/* <ShortCircuitExample/> */}

      // {/* <RegistrationForm/> */}
      // {/* <LoginForm/> */}
      // {/* <ContactForm/> */}
      // {/* <ReactUseEffect/> */}
      // {/* <UseEffectExample/> */}
      // {/* <CleanUpFunction/> */}
      // {/* <UseRefHook/> */}
      // {/* <ForwardRefs/> */}
      // {/* <UseId/> */}
      // {/* <ParentComponent/> */}

  // {/* // return <Profile/>; */}
    // </section>
  );
};