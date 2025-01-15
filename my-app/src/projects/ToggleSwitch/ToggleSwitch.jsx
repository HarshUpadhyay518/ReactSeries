import { useState } from "react";
import "./ToggleSwitch.css";
// import { IoIosSwitch } from "react-icons/io";

export const ToggleSwitch =() =>{

    const[isON,setIsON] = useState(false);

    const handleToggleSwitch = () =>{
        setIsON(!isON);
    }

    const checkIsOn = isON ? "on" : "off";

    const ToggleBGColor = {backgroundColor:isON ? "#4caf50" : "#f44336"};

    return(
        
        <div className="toggle-switch" style={ToggleBGColor} onClick={handleToggleSwitch}>
            <div className={`switch ${checkIsOn}`}>
                <span className="switch-state">{checkIsOn}</span>
            </div>
        </div>
    );
};