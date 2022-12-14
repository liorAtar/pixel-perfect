import React from "react";
import '../style/cmp/main-section.css'
import illustarion from '../imgs/illustration-intro.png';

const AppHeader = () => {
    return (
        <div>
            <img className="illustarion-img" src={illustarion} alt="mainImg"></img>
            <h1 className="title">
                All your files in one secure location, accessible anywhere.
            </h1>
        </div>
    )
}

export default AppHeader;