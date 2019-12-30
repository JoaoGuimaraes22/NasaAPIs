import React from "react";
import "../css/main.css";

const Opportunity = ({fullNameO, cameraO, imgSrcO}) => {
    return(
        <div className="oportunity">
            <h1><span className="taken-by">Taken by:</span> {fullNameO}</h1>
            <p>With: {cameraO}</p>
            <img src={imgSrcO} alt="img-was-here"/>
        </div>
    )
}

export default Opportunity;