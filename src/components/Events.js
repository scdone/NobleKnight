import React from 'react'
import { useNavigate, withRouter } from 'react-router-dom'

function Events(props) {
    let navigate = useNavigate()
    let {userInput: userChoice} = props
    let firstEventChoice = props.events[props.index].choices.firstChoice
    let secondEventChoice = props.events[props.index].choices.secondChoice

    function handleUserInput (e) {
        props.setUserInput(e.target.value.toUpperCase())
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (userChoice === '') {
            return
        }
        if(userChoice !== firstEventChoice.choiceName && userChoice !== secondEventChoice.choiceName){
            alert('That is not a valid choice!')
        }
        else {
        navigate('/choices')}

    }


    if(props.index === 0){
    return (
        <div className="welcome-box">
        <section className="event-section flex-col-center">
            <h1 className="h1">Huzzah, {props.playerName}! Welcome to ye kingdom!</h1>
            <p className='event-text'>{props.events[props.index].eventText}</p>
            <form onSubmit={handleFormSubmit} className="form-input">
                <input autoFocus onChange={handleUserInput} type="text" id="choice-input" placeholder='enter choice here'/>
            </form>
        </section>
        </div>
    )}
    else if(props.index !== 0) {
        return (
            <div className="welcome-box">
            <section className="event-section flex-col-center">
                <p className='event-text'>{props.events[props.index].eventText}</p>
                <form onSubmit={handleFormSubmit} className="form-input">
                    <input autoFocus onChange={handleUserInput} type="text" id="choice-input" placeholder='enter choice here'/>
                </form>
            </section>
            </div>
        )}
    else if(props.index === 10) {
        navigate('/youwin')
    }

}
 
export default withRouter(Events)