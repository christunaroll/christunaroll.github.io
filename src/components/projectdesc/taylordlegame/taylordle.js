import React from 'react'
import './taylordle.css'
import taylordle_pic from "../../../images/taylordle_page.png";

function taylordle() {
  return (
    <div id = "taylordle">
        <div className="taylordle-title">
            <h1>Taylordle</h1>
        </div>
        <div className="taylordle-content">
            <div className="taylordle-info">
                <h3>About Taylordle</h3>
                <p>
                    Taylordle is a spin off to the popular game "WORDLE", where users attempt to guess a random 5 letter word,
                    and after each attempt are shown whether a letter is in the word and in the correct placement (green),
                    in the word but not in the correct placement (yellow), or not in the word at all (red).
                </p>
                <p>
                    This version only uses 5 letter words related to the singer-songwriter Taylor Swift. 
                </p>
                <p>
                    Users can type and backspace as they write out their guess. Once they submit their guess, 
                    each, the background of each square of the current line will flip to either a red, yellow, or green color. 
                    Users may allow to guess a word 6 times.
                    Users know they have finished the game with a pop up box indicating they have figured out the word, or have failed.  
                </p>
                <p>
                    Languages and Tools: HTML, CSS, Javascript
                </p>
                <p>
                    <a href="https://github.com/christunaroll/Taylordle-Clone">Github</a>
                </p>
            </div>
            <div className="taylordle-img">
                <img id = "taylordle-pic" src={taylordle_pic}></img> 
            </div>
        </div>
    </div>
  )
}

export default taylordle
