import React from "react";
import { useNavigate } from "react-router-dom";




function GameOver() {

  let navigate = useNavigate();

  const handleClickplay = () => {
    navigate('/getname')
  }

  const handleClickQuit = () => {
      navigate('/')
  }

    return (

        <section className='game-over-section'>
            <h1 className='h1'>Alas, ye have perished...</h1>
        
        <div id="game-over-imgs">
        <img id="coffin-img" src={require('../fonts/coffin.png')} />
        <img id="gameover-img" src={require('../fonts/game-over.png')} />
        </div>
        <container id="end-game-columns">
        <div id="end-game-left-col">   
        <div id="end-game-div">
            <h1>Ending Score: -100</h1>
            <h1>Ranking: 0</h1>
        </div>
        <div id="end-game-buttons">
            <button id="save-and-quit-btn" onClick={handleClickQuit}>Save and Quit</button>
            <button id="save-and-play-again-btn" onClick={handleClickplay}>Save and Play Again</button>
        </div>
        </div>
        <div id="end-game-right-col">
            <h1 id="leaderboard-title">Leaderboard</h1>
            <p>1. player // score: 1000</p>
            <p>2. player // score: 900</p>
            <p>3. player // score: 800</p>
            <p>4. player // score: 700</p>
            <p>5. player // score: 600</p>
        </div>
        </container>
        </section>
    )
}

export default GameOver