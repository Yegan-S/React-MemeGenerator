import React from "react";
import TrollFace from "./images/troll-face.png";
import "./App.css";

export default function Header (){
    return(
        <header className="Header">
           <img src={TrollFace}
           alt="trollface"
           className="TrollFace" 
           width="45px"
           /> 
           <h2>Meme Generator</h2>
           <h4>React Course - project 3 </h4>
        </header>
    );
}