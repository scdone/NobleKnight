import { useHistory, withRouter } from 'react-router-dom'
import axios from 'axios'
import React, { useState } from 'react'



function CreateAccount(props) {
    let history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleConfirm(e) {
        setConfirm(e.target.value)
    }

    function handleCreateAccountFront(e) {
        e.preventDefault()

        if(password !== confirm) {
            alert('passwords must match')
            setPassword('')
            setConfirm('')
        } else {
            props.setLoading(true)
            const body = {
                username: username,
                password: password
            }
            axios.post('/auth/createAccount', body)
                .then((res) => {
                    props.setUser(res.data)
                    props.setLoading(false)
                })
            history.push('/playerhistory')
            }
    }

    return (
        <section className='create-account-section'>
            <div id="create-account-div">
                <h1 id="create-account-title">create an account</h1>
            </div>
        <section className='create-account-container'>
            <div id="sword-div-left">
                <img id="sword-img-left" src={require('../fonts/nobleKnight-sword-left.png')} />
            </div>
            <br/>
            <div id="create-account-div">
                <form id="create-account-form" onSubmit={handleCreateAccountFront}>
                    <label>
                        create username
                        <br/>
                    <input autoFocus type="text" id="create-username-input" onChange={handleUsername} />
                    </label>
                    <br/>
                    <label>
                        create password
                        <br/>
                    <input type="password" id="create-password-input" onChange={handlePassword}/>
                    </label>
                    <br/>
                    <label>
                        confirm password
                        <br/>
                    <input type="password" id="confirm-password-input" onChange={handleConfirm} />
                    </label>
                    <br/>
                    <input type="submit" id="submit-create-account"></input>
                </form>
            </div>
            <div id="sword-div-right">
                <img id="sword-img-right" src={require('../fonts/noble-sword-right-png.png')} />
            </div>
            </section>
        </section>
    )
}

export default withRouter(CreateAccount)