import React from "react";
import "../css/main.css";

const Curiosity = ({imgSrc, fullName, camera}) => {
    return(
        <div className="curiosity">
            <h1><span className="taken-by">Taken by:</span> {fullName}</h1>
            <p>With: {camera}</p>
            <img src={imgSrc} alt="img-was-here"/>
        </div>
    )
}

export default Curiosity;