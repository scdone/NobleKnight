import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import WithRouter from './WithRouter'

function YouWin(props) {

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

    <section className='youwin-section'>
        <h1 className='h1'>Huzzah, {props.playerName}! You have won!</h1>
            
            <div id="you-win-imgs">
    
            </div>
            <div id="end-game-columns">
            <div id="end-game-left-col">   
            <div id="end-game-div">
                <h1>Ending Score: {props.score}</h1>
            </div>
            <div id="end-game-buttons">
                <button id="save-and-quit-btn" onClick={handleLogout}>Save and Logout</button>
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

            <section className='youwin-section'>
                <h1 className='h1'>Huzzah, {props.playerName}! You have won!</h1>
                    
                    <div id="you-win-imgs">
            
                    </div>
                    <div id="end-game-columns">
                    <div id="end-game-left-col">   
                    <div id="end-game-div">
                        <h1>Ending Score: {props.score}</h1>
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

export default (WithRouter(YouWin))