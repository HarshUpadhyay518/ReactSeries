 export const SeriesCard = ({data}) =>{
    const {img_url,name,intro,para,summary,lang,watch_url} = data;
    return(  
        <li className="card">
          <div>
            <img src={img_url} alt={name} width="40%" height="40%"/>
          </div>
          {/* Dynamic values */}
          <div className="card-content">
          <h1>Name: {name}</h1>
          <p>Intro:{intro}</p> 
          <p>Para:{para}</p>
          <p>Summary:{summary}</p>
          <p>Language:{lang}</p>

          {/* conditionals in jsx */}
          {/* <button>{age >= 18 ? "Watch Now" : "Not Available"}</button> */}
          <a href={watch_url} target="_blank">
            <button>Watch Now</button>
          </a>
          </div>
        </li>
      );
}