import React from "react";
import "../css/main.css";

const Fetch = ({opportunity, curiosity, spirit}) => {
    return(
        <div className="buttons">
            <button onClick={opportunity}>Get Opportunity Rover Photos</button>
            <button onClick={curiosity}>Get Curiosity Rover Photos</button>
            <button onClick={spirit}>Get Spirit Rover Photos</button>
        </div>
    )
}

export default Fetch;