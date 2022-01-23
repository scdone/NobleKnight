import { useNavigate } from 'react-router-dom'


function YouWin(props) {
    console.log(123, props)

    let navigate = useNavigate();

    const handleClickplay = () => {
      navigate('/getname')
    }
  
    const handleClickQuit = () => {
        navigate('/')
    }

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
            </div>
    </section>
    )
}

export default YouWin