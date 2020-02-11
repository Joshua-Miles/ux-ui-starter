import React from 'react'

const SplashView = props => (
    <div>
        <div>
            <h1>Login</h1>
            <div>
                <label>Username</label>
                <input
                    type="text"
                    value={props.username}
                    onChange={e => props.changeUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="text"
                    value={props.password}
                    onChange={e => props.changePassword(e.target.value)}
                />
            </div>
            <button onClick={() => props.login()}>Login</button>
        </div>
        <div>
            <h1>Sign Up</h1>
            <div>
                <label>Username</label>
                <input
                    type="text"
                    value={props.newUsername}
                    onChange={e => props.changeNewUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="text"
                    value={props.newPassword}
                    onChange={e => props.changeNewPassword(e.target.value)}
                />
            </div>
            <button onClick={() => props.signUp()}>Sign Up</button>
        </div>
    </div>
)

export { SplashView }