import { useNavigate } from 'react-router-dom'

function Choices(props) {

let navigate = useNavigate()
let userChoice = props.userInput
let firstEventChoice = props.events[props.index].choices.firstChoice
let secondEventChoice = props.events[props.index].choices.secondChoice

function nextEventFirstChoice(e) {
    props.setIndex(props.index + 1)
    props.setScore(props.score + firstEventChoice.changeScore)

    if(firstEventChoice.youWin === true){
        navigate('/youwin')
    }
    else if(firstEventChoice.gameOver === true){
        navigate('/gameover')}
    else if (firstEventChoice.gameOver === false) {
        navigate('/events')
    }
}

function nextEventSecondChoice(e) {
    props.setIndex(props.index + 1)
    props.setScore(props.score + secondEventChoice.changeScore)

    if(secondEventChoice.gameOver === true){
        navigate('/gameover')}
    else if (secondEventChoice.gameOver === false) {
        navigate('/events')
    }
}





if(userChoice === firstEventChoice.choiceName){
    return (
        <div className="welcome-box">
        <section className="event-section flex-col-center">
            <p className='event-text'>{firstEventChoice.choiceText}</p>
            <form onSubmit={nextEventFirstChoice}>
            <input type="text"/>
            </form>
        </section>
        </div>
    )
}
else if(userChoice === secondEventChoice.choiceName){
    return (
        <div className="welcome-box">
        <section className="event-section flex-col-center">
            <p className='event-text'>{secondEventChoice.choiceText}</p>
            <form onSubmit={nextEventSecondChoice}>
            <input type="text"/>
            </form>
        </section>
        </div>
    )
}

}



export default Choices