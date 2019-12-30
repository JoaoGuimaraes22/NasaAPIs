import React from "react";
import "../css/main.css";

const Fetch = ({opportunity, curiosity, spirit}) => {
    return(
        <div className="buttons">
            <button onClick={opportunity}>Get Opportunity Photos</button>
            <button onClick={curiosity}>Get Curiosity Photos</button>
            <button onClick={spirit}>Get Spirit Photos</button>
        </div>
    )
}

export default Fetch;