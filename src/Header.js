import React from "react";
import TrollFace from "./images/troll-face.png";
import "./App.css";

export default function Header (){
    return(
        <header className="Header">

           <img src={TrollFace}
           alt="trollface"
           className="header--image" 
           /> 

           <h2 className="header--title">Meme Generator</h2>
           <h4 className="header--project">React Course - project 3 </h4>
        </header>
    );
}