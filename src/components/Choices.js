import { useHistory, withRouter } from 'react-router-dom'
import React, { useEffect } from 'react'


function Choices(props) {

let history = useHistory()
let userChoice = props.userInput
let firstEventChoice = props.events[props.index].choices.firstChoice
let secondEventChoice = props.events[props.index].choices.secondChoice

const choiceMachine = (e) => {
    if(e.key === 'Enter') {
        if(userChoice === firstEventChoice.choiceName){
            props.setScore(props.score + firstEventChoice.changeScore)

            if(firstEventChoice.youWin === true){
                props.setUserInput('')
                history.push('/youwin')
            }
            else if(firstEventChoice.gameOver === true){
                props.setIndex(props.index + 1)
                props.setUserInput('')
                history.push('/gameover')}
            else if (firstEventChoice.gameOver === false) {
                props.setIndex(props.index + 1)
                props.setUserInput('')
                history.push('/events')
            }
        } else {
            props.setIndex(props.index + 1)
            props.setScore(props.score + secondEventChoice.changeScore)

            if(secondEventChoice.gameOver === true){
                props.setUserInput('')
                history.push('/gameover')}
            else if (secondEventChoice.gameOver === false) {
                props.setUserInput('')
                history.push('/events')
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



export default withRouter(Choices)