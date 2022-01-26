import React, {useEffect} from "react"
import { Link , useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"
import WithRouter from './WithRouter'

function Login(props) {

    let navigate = useNavigate()
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)


    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    const handleClickAsGuest = () => {
        props.setUser(null)
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
            .catch((error)=> {
                props.setLoading(false)
                alert(error.response.data)
            })
    }

    useEffect(() => {
        if (props.user) {
            navigate('/playerhistory')
        }
    }, [props.user])

    return (
        <section className='login-section'>
                <div className="login-form column1">
                    <h2>Login</h2>
                <form className="user-login" onSubmit={handleUserLogin}>
                    <label><b>username</b></label>
                    <br/>
                    <input autoFocus type="text" placeholder="enter username" onChange={handleUsername} name="uname" id="username-input" required />
                    <br/>
                    <br/>
                    <label><b>password</b></label>
                    <br/>
                    <input type="password" placeholder="enter password" onChange={handlePassword} name="passw" id="password-input" required />
                    <br/>
                    <button type="submit" id="login-submit-button" onClick={handleUserLogin}>Login</button>
                    <br/>
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

export default WithRouter(Login)
