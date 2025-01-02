import NetflixSeries from "./components/NetflixSeries";
// import Profile from "./components/Profile";
import "./components/Netflix.css";
export const App = () =>{
  return( 
    <section className="container">
      <h1 className="card-heading">List of best react series</h1>
      <NetflixSeries/> 
  {/* // return <Profile/>; */}
    </section>
  );
};


// Export and import: default,named and mixed
// Looping in jsx : we use map
// props in jsx