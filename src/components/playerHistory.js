import { useNavigate } from 'react-router-dom'



function PlayerHistory() {

    let navigate = useNavigate()

    const handleNewGameButton = () => {
        navigate("/getname")
    }

    return (

        <section className='player-history-section'>
            <h1 ID="previous-games-title">previous games</h1>
            <container id="previous-games-container">
                <div id="most-recent-game">Date: 1/19/2022 / KnightName: Anubis / Score: 25 / Ranking:5</div>
                <br/>
                <div id="next-recent-game">Date: 1/12/2022 / KnightName: Maddox / Score: 17 / Ranking:12</div>
                <br/>
                <div id="third-recent-game">Date: 1/01/2022 / KnightName: Heathen / Score: -7 / Ranking:69</div>
                <br/>
            </container>
            <button id="start-new-game-button" onClick={handleNewGameButton}>Start New Game</button>
        </section>

    )
}

export default PlayerHistory