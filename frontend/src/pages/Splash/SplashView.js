import React from 'react'

const SplashView = props => (
    <div className="splash-view">
        <div className="form login-form">
            <h1>Login</h1>
            <div className="form-field">
                <label>Username</label>
                <input
                    type="text"
                    value={props.username}
                    onChange={e => props.changeUsername(e.target.value)}
                />
            </div>
            <div className="form-field">
                <label>Password</label>
                <input
                    type="text"
                    value={props.password}
                    onChange={e => props.changePassword(e.target.value)}
                />
            </div>
            <button className="log-in-button" onClick={() => props.login()}>Login</button>
        </div>
        <div className="sign-up-form">
            <h1>Sign Up</h1>
            <div className="form-field">
                <label className="form-label">Username</label>
                <input
                    className="form-input"
                    type="text"
                    value={props.newUsername}
                    onChange={e => props.changeNewUsername(e.target.value)}
                />
            </div>
            <div className="form-field">
                <label className="form-label">Password</label>
                <input
                    className="form-input"
                    type="text"
                    value={props.newPassword}
                    onChange={e => props.changeNewPassword(e.target.value)}
                />
            </div>
            <button className="sign-up-button" onClick={() => props.signUp()}>Sign Up</button>
        </div>
    </div>
)

export { SplashView }