import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function GetPlayerName(props) {

    let navigate = useNavigate()

    function getEventsFront() {
        axios.get('/allEvents')
            .then((res) => {
                props.setEvents(res.data)
                navigate('/events')
            })
    }

    function getName(e) {
        props.setPlayerName(e.target.value.toUpperCase())
    }

    function handleGetNameSubmit(e) { 
         e.preventDefault()
         getEventsFront()
    }

    return (
        <section className='get-player-name-section'>
            <div id="nameth-door-img-div">
            <h1 id="nameth">Halt! Before we go further... <br/>What is thy nameth?</h1>
            </div> 
            <img id="doors-img" src={require('../fonts/doors.png')} />
            <form id="get-player-name-form" onSubmit={handleGetNameSubmit}>
                <input autoFocus onChange={getName} type="text" id="get-name-input" name="playerName"/>
            </form>
        </section>
    )
}

export default GetPlayerName