/* eslint-disable react/prop-types */
import styles from "./Netflix.module.css";
import styled from "styled-components";

 export const SeriesCard = ({currElement}) =>{
    const {img_url,name,rating,intro,para,summary,lang,watch_url} = currElement;

    // const btn_style = {};
    const ButtonStyle = styled.button({
      padding: "1.2rem 2.4rem",
      border:"none",
      fontSize:"1.6rem",
      backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
      color:"var(--btn-color)",
      fontWeight: "bold",
      cursor: "pointer"
    })

    const ratingClass = rating >=8.5 ? styles.super_hit : styles.average ;

    return(  
        <li className= {styles.card}>
          <div>
            <img src={img_url} alt={name} width="40%" height="40%"/>
          </div>
          {/* Dynamic values */}
          {/* <div className={styles["card-content"] }> */}
          <div className="flex flex-col gap-6 py-[1.5rem] px-[1.5rem]">
          <h2>Name: {name}</h2>
          <h3>Rating: <span className={`${styles.rating} ${ratingClass}`}>
            {rating} </span></h3>
          <p>Intro:{intro}</p> 
          <p>Para:{para}</p>
          <p className="text-3xl font-bold underline">Summary:{summary}</p>
          <p>Language:{lang}</p>

          {/* conditionals in jsx */}
          {/* <button>{age >= 18 ? "Watch Now" : "Not Available"}</button> */}
          <a href={watch_url} target="_blank">
            {/* <button style={btn_style}>Watch Now</button> */}
            <ButtonStyle>Wathch Now</ButtonStyle>
          </a>
          </div>
        </li>
      );
}