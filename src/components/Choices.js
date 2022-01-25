import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'

function Choices(props) {

let navigate = useNavigate()
let userChoice = props.userInput
let firstEventChoice = props.events[props.index].choices.firstChoice
let secondEventChoice = props.events[props.index].choices.secondChoice

const choiceMachine = (e) => {
    if(e.key === 'Enter') {
        if(userChoice === firstEventChoice.choiceName){
            props.setScore(props.score + firstEventChoice.changeScore)

            if(firstEventChoice.youWin === true){
                props.setUserInput('')
                navigate('/youwin')
            }
            else if(firstEventChoice.gameOver === true){
                props.setIndex(props.index + 1)
                props.setUserInput('')
                navigate('/gameover')}
            else if (firstEventChoice.gameOver === false) {
                props.setIndex(props.index + 1)
                props.setUserInput('')
                navigate('/events')
            }
        } else {
            props.setIndex(props.index + 1)
            props.setScore(props.score + secondEventChoice.changeScore)

            if(secondEventChoice.gameOver === true){
                props.setUserInput('')
                navigate('/gameover')}
            else if (secondEventChoice.gameOver === false) {
                props.setUserInput('')
                navigate('/events')
            }
        }  
    }
}


useEffect(() => {
    window.addEventListener('keydown', choiceMachine)

    return () => {
        window.removeEventListener('keydown', choiceMachine)
    }
}, [])


if(userChoice === firstEventChoice.choiceName){
    return (
        <div className="welcome-box">
        <section className="event-section flex-col-center">
            <p className='event-text'>{firstEventChoice.choiceText}</p>
            <br/>
            <p>Press Enter to continue</p>
        </section>
        </div>
    )
}
else if(userChoice === secondEventChoice.choiceName){
    return (
        <div className="welcome-box">
        <section className="event-section flex-col-center">
            <p className='event-text'>{secondEventChoice.choiceText}</p>
            <br/>
            <p>Press Enter to continue</p>
        </section>
        </div>
    )
} else {
    return (
        <div>
            <p>Loading...</p>
        </div>
    )
}

}



export default Choices