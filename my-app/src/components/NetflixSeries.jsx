import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesCard";


const NetflixSeries = () =>{
    // const name = "React Series"
    // const intro = "Hello and welcomer to react series"
    // const para = "Nice to meet again"
    // const summary = "Here we are learning the basics of react"
    // let age = 19;
    // const returnlanguage = () =>{
    //   const lang = "English/Hindi";
    //   return lang;
    // }
    // if (age < 18){
    //   return(
    //     <div>
    //       <div>
    //         <img src="react_photo.jpg" alt="react_photo" width="40%" height="40%"/>
    //        </div>
    //        {/* Dynamic values */}
    //       <h1>Name: {name}</h1>
    //       <p>Intro:{intro}</p> 
    //       <p>Para:{para}</p>
    //       <p>Summary:{summary}</p>
    //       <p>Language:{returnlanguage()}</p>
    //       <button>Not Available</button>
    //       {/* conditionals in jsx */}
    //     </div>
    //   )
    // }
    return(
    <ul className="grid grid-three-cols">
        {
            seriesData.map((curElem) => (
              <SeriesCard key={curElem.id} data = {curElem}/>
            ))
        }
    </ul>
    );
  };
  export default NetflixSeries;