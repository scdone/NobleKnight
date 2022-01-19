function Login() {

    return (
        <div class="row">
        <section className='login-section'>
                <div class="login-form column">
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
                </form>
                </div>
                <div className="play-as-guest column">
                    <h2 className="play-guest">Play as Guest</h2>
                    <button className="enter-welcome-btn">ENTER</button>
                </div>
        </section>
        </div>

    )
}

export default Login
