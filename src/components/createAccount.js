import { useNavigate } from 'react-router-dom'



function CreateAccount() {

    let navigate = useNavigate()

    const handleCreateAccountSubmit = () => {

        navigate('/playerhistory')
    }

    return (
        <section className='create-account-section'>
            <div id="create-account-div">
                <h1 id="create-account-title">create an account</h1>
            </div>
        <container className='create-account-container'>
            <div id="sword-div-left">
                <img id="sword-img-left" src={require('../fonts/nobleKnight-sword-left.png')} />
            </div>
            <br/>
            <div id="create-account-div">
                <form id="create-account-form" onSubmit={handleCreateAccountSubmit}>
                    <label>
                        create username
                        <br/>
                    <input type="text" id="create-username-input" />
                    </label>
                    <br/>
                    <label>
                        create password
                        <br/>
                    <input type="text" id="create-password-input" />
                    </label>
                    <br/>
                    <label>
                        confirm password
                        <br/>
                    <input type="text" id="confirm-password-input" />
                    </label>
                    <br/>
                    <input type="submit" id="submit-create-account"></input>
                </form>
            </div>
            <div id="sword-div-right">
                <img id="sword-img-right" src={require('../fonts/noble-sword-right-png.png')} />
            </div>
            </container>
        </section>
    )
}

export default CreateAccount