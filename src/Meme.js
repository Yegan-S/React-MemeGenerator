import React from "react";
import memeData from "./memeData";
import "./App.css";

 export default function Meme(){

    const [meme, setMeme] = React.useState ({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memeData)

    function getmemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : url
        })) 

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
            <img src={meme.randomImage}
            className="meme--image"
            alt=""
            />
        </main>
    );
 }