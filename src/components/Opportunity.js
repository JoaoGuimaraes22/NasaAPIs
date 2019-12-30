import React from "react";
import "../css/main.css";

const Opportunity = ({fullNameO, cameraO, imgSrcO}) => {
    return(
        <div>
            <h1>{fullNameO}</h1>
            <p>{cameraO}</p>
            <img src={imgSrcO} alt="img-was-here"/>
        </div>
    )
}

export default Opportunity;