 export const SeriesCard = ({data}) =>{
    const {img_url,name,intro,para,summary,lang,watch_url} = data;

    const btn_style = {
      padding: "1.2rem 2.4rem",border:"none",fontSize:"1.6rem",backgroundColor:"var(--btn-hover-bg-color)",color:"var(--bg-color)"
    }
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
            <button style={btn_style}>
              Watch Now
            </button>
          </a>
          </div>
        </li>
      );
}