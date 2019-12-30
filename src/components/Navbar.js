import React from "react";
import "../css/main.css";

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li><a href="#picture">Home</a></li>
                <li><a href="#curiosity">Curiosity Photos</a></li>
                <li><a href="#opportunity">Opportunity Photos</a></li>
                <li><a href="#spirit">Spirit Photos</a></li>
                <li><a href="#">Random NASA Images</a></li>
            </ul>
        </nav>
    )
};

export default Navbar;