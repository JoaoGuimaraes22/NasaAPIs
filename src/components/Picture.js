import React from "react";

const Picture = ({title, image, photo}) => {
    return(
    <div>
        <h1>{title}</h1>
        <img src={image} alt="img-nasa"/>
        <h4>{photo}</h4>
    </div>)
}

export default Picture;