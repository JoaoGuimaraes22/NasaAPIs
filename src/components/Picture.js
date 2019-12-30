import React from "react";
import "../css/main.css";

const Picture = ({title, image, photo}) => {
    return(
    <div id="picture">
        <h1><span className="pic-span">NASA photo of the day:</span> {title}</h1>
        <img src={image} alt="img-nasa" className="pic-pic"/>
        <h4 className="photographer"><span className="pic-span">Photographer:</span> {photo}</h4>
    </div>)
}

export default Picture;