
function Welcome(props) {

    return (
        <section className="welcome-box">
            <h1 className="h1">Noble knight, thou hast a problem!</h1> 
            <h1 className="h1" id="h1-2">Enter if ye dare...</h1>
            <button className="enter-welcome-btn" onClick={props.enterGame}>ENTER</button>
            <h4 className="author-tagline">A text-based adventure <br/> by Stetson Done</h4>
        </section>
    )
}

export default Welcome

