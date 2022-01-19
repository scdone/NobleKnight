function PlayerHistory() {

    return (

        <section className='player-history-section'>
            <h1 ID="previous-games-title">previous games</h1>
            <container id="previous-games-container">
                <div>last saved game</div>
                <div>last last saved game</div>
                <div>this is an example but it will pull data from player db</div>
            </container>
            <button id="start-new-game-button">Start New Game</button>
        </section>

    )
}

export default PlayerHistory