import React from "react";
import "../css/main.css";

const Picture = ({title, image, photo}) => {
    return(
    <div id="picture">
        <h1>Photo name: {title}</h1>
        <img src={image} alt="img-nasa" className="pic-pic"/>
        <h4 className="photographer">Photographer: {photo}</h4>
    </div>)
}

export default Picture;