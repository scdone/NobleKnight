import Header from './Header'

function Events(props) {
    return (
        <div>
        <Header />   
        <section className="event-section flex-col-center">
            <p>{props.allEvents.eventText}</p>
            <form className="form-input" onSubmit={props.checkAnswer}>
                <input className="input-field" type="text" value={props.userInput} onSubmit={props.handleInput}/>
            </form>
        </section>
        </div>
    )
}

export default Events