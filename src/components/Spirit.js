import React from "react";
import "../css/main.css";

const Spirit = ({fullNameS, cameraS, imgSrcS}) => {
    return(
        <div className="spirit">
            <h1><span className="taken-by">Taken by:</span> {fullNameS}</h1>
            <p>With: {cameraS}</p>
            <img src={imgSrcS} alt="img-was-here"/>
        </div>
    )
}

export default Spirit;