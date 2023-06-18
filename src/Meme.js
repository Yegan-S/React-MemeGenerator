import React from "react";
import memeData from "./memeData";
import "./App.css";

 export default function Meme(){
    const [memeImage, setMemeImage] = React.useState ("")

    function getmemeImage(){
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        //const url = memesArray[randomNumber].url
       }
    return(
        <main>
            <div className="form">
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
            </div>
            <img src={memeImage}
            className="meme--image"
            alt=""
            />
        </main>
    );
 }