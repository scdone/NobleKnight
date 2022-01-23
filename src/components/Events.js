import axios from "axios"

function Events(props) {
    console.log(props)


    return (
        <section className="event-section flex-col-center">
            <p>{props.events[0].eventText}</p>
            <form className="form-input">
                <input type="text" id="choice-input"/>
            </form>
        </section>
    )
}

export default Events