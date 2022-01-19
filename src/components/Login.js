import React from "react"
import { Link } from 'react-router-dom'

function Login() {

    return (
        <section className='login-section'>
                <div class="login-form column1">
                    <h2>Login</h2>
                <form className="user-login">
                    <label for="username"><b>username</b></label>
                    <br/>
                    <input type="text" placeholder="enter username" name="uname" id="username-input" required />
                    <br/>
                    <label for="password"><b>password</b></label>
                    <br/>
                    <input type="text" placeholder="enter password" name="passw" id="password-input" required />
                    <br/>
                    <input type="submit" id="login-submit-button"/>
                    <br/>
                    <Link to='/createaccount' id="create-acct-link">don't have an account? <br/> create one here</Link>
                </form>
                </div>
                <div className="play-as-guest column2">
                    <h2 className="play-guest">Play as Guest</h2>
                    <button className="enter-welcome-btn">ENTER</button>
                </div>
        </section>

    )
}

export default Login
