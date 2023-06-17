import React from "react";
import memeData from "./memeData";
import "./App.css";

 export default function Meme(){
    function getmemeImage(){
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() *memesArray.length)
        const url = memesArray[randomNumber].url
        alert (url)
    }
    return(
        <main>
            <form className="form">
                <input type="text" 
                className="form--input"
                 placeholder="Top text"/>

                <input type="text" 
                className="form--input" 
                placeholder="Bottom text"/>

                <button className="form--button"
                onClick={getmemeImage}
                >
                    Get a new meme image 
                     </button>
            </form>
        </main>
    );
 }