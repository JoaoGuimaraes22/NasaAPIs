import React from "react"

const Spirit = ({fullNameS, cameraS, imgSrcS}) => {
    return(
        <div>
            <h1>{fullNameS}</h1>
            <p>{cameraS}</p>
            <img src={imgSrcS} alt="img-was-here"/>
        </div>
    )
}

export default Spirit;