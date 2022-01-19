function GetPlayerName() {

    return (
        <section className='get-player-name-section'>
            <div id="nameth-door-img-div">
            <h1 id="nameth">Halt! Before we go further... <br/>What is thy nameth?</h1>
            <img id="doors-img" src={require('../fonts/doors.png')} />
            </div> 
            <form id="get-player-name-form">
                <input type="text" id="get-name-input" name="playerName"/>
            </form>
        </section>
    )
}

export default GetPlayerName