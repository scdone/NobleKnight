import React from "react"
import { Link , useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"

function Login(props) {

    let navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    const handleClickAsGuest = () => {
        props.setUser('')
        navigate('/getname')
    }

    const handleUserLogin = (e) => {
        e.preventDefault() 
        props.setLoading(true)

        const body = {
            username: username,
            password: password
        }

        axios.post('/auth/login', body)
            .then((res) => {
                props.setUser(res.data)
                props.setLoading(false)
            })
        navigate('/playerhistory')
    }

    return (
        <section className='login-section'>
                <div className="login-form column1">
                    <h2>Login</h2>
                <form className="user-login" onSubmit={handleUserLogin}>
                    <label><b>username</b></label>
                    <br/>
                    <input type="text" placeholder="enter username" onChange={handleUsername} name="uname" id="username-input" required />
                    <br/>
                    <label><b>password</b></label>
                    <br/>
                    <input type="text" placeholder="enter password" onChange={handlePassword} name="passw" id="password-input" required />
                    <br/>
                    <input type="submit" id="login-submit-button" onClick={handleUserLogin}/>
                    <br/>
                    <Link to='/createaccount' id="create-acct-link">don't have an account? <br/> create one here</Link>
                </form>
                </div>
                <div className="play-as-guest column2">
                    <h2 className="play-guest">Play as Guest</h2>
                    <button className="enter-welcome-btn" onClick={handleClickAsGuest}>ENTER</button>
                </div>
        </section>

    )
}

export default Login
