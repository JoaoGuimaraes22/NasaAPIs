import React from "react";

const Fetch = ({opportunity, curiosity, spirit}) => {
    return(
        <div>
            <button onClick={opportunity}>Get Opportunity Photos</button>
            <button onClick={curiosity}>Get Curiosity Photos</button>
            <button onClick={spirit}>Get Spirit Photos</button>
        </div>
    )
}

export default Fetch;