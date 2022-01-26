import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { WithRouter } from './WithRouter'

function GameOver(props) {

  let navigate = useNavigate();

  const handlePlayAgain = () => {
    props.saveGameFront()
    props.setPlayerName('')
    props.setIndex(0)
    props.setScore(0)
    navigate('/playerhistory')
}

const handleClickQuit = () => {
    props.setPlayerName('')
    props.setIndex(0)
    props.setScore(0)
    navigate('/')
}

function handleLogout() {
    props.saveGameFront()
    props.setIndex(0)
    props.setLoading(true)
    axios.get(`/auth/logout`)
        .then(() => {
          props.setUser(null)
          props.setLoading(false)
        })
    navigate('/')
  }


  if(props.user){
    return (

        <section className='game-over-section'>
            <h1 className='h1'>Alas, ye have perished...</h1>
        
        <div id="game-over-imgs">
        <img id="coffin-img" src={require('../fonts/coffin.png')} />
        <img id="gameover-img" src={require('../fonts/game-over.png')} />
        </div>
        <div id="end-game-columns">
        <div id="end-game-left-col">   
        <div id="end-game-div">
            <h1>Ending Score: {props.score} </h1>
        </div>
        <div id="end-game-buttons">
            <button id="save-and-quit-btn" onClick={handleLogout}>Save and Quit</button>
            <button id="save-and-play-again-btn" onClick={handlePlayAgain}>Save and Play Again</button>
        </div>
        </div>
        <div id="end-game-right-col">
        <h1 id="leaderboard-title">Leaderboard</h1>
                    <div className='leaders'>
                     <ol>
                         
                            {props.leaderboard.map(
                            ({ username, score, game_id }) => <li key={game_id} >{`${username} // Score: ${score}`}</li>)}
                    
                     </ol>
                    </div>
        </div>
        </div>
        </section>
    )}

    else if(props.user === null) {
        return (

            <section className='game-over-section'>
                <h1 className='h1'>Alas, ye have perished...</h1>
            
            <div id="game-over-imgs">
            <img id="coffin-img" src={require('../fonts/coffin.png')} />
            <img id="gameover-img" src={require('../fonts/game-over.png')} />
            </div>
            <div id="end-game-columns">
            <div id="end-game-left-col">   
            <div id="end-game-div">
                <h1>Ending Score: {props.score} </h1>
            </div>
            <div id="end-game-buttons">
                <button id="save-and-quit-btn" onClick={handleClickQuit}>Quit</button>
            </div>
            </div>
            <div id="end-game-right-col">
            <h1 id="leaderboard-title">Leaderboard</h1>
                        <div className='leaders'>
                         <ol>
                             
                                {props.leaderboard.map(
                                ({ username, score, game_id }) => <li key={game_id} >{`${username} // Score: ${score}`}</li>)}
                        
                         </ol>
                        </div>
            </div>
            </div>
            </section>
        )
    }
}

export default (WithRouter(GameOver))