import React from 'react'
import './connectn.css'
import connectn_pic from "../../../images/connectn_page.png";

function connectn() {
  return (
    <div id = "connectn">
        <div className="connectn-title">
            <h1>Connect N</h1>
        </div>
        <div className="connectn-content">
            <div className="connectn-info">
                <h3>About Connect N</h3>
                <p>
                    Connect N is similar to the well-known game Connect 4. In this iteration, players choose a token and then take turns "dropping" 
                    the tokens into vertical columns. 
                    The pieces fall straight down, occupying the lowest available space within the column. 
                    The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of n of one's own tokens.
                </p>
                <p>
                    The game is played via the command line. Users will input their name and their opponents name, 
                    the number of tokens in a row needed to win, and the desired dimensions of the board game. 
                </p>
                <p>
                    Languages and Tools: Object Oriented Programming in C++
                </p>
                <p>
                    <a href="https://github.com/christunaroll/ConnectN">Github</a>
                </p>
            </div>
            <div className="connectn-img">
                <img id = "connectn-pic" src={connectn_pic}></img> 
            </div>
        </div>
    </div>
  )
}

export default connectn
