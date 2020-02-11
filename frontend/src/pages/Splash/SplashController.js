import React, { useState } from 'react'
import { useSocket } from '../../socket'
import { useHistory } from 'react-router'

const SplashController = ({ View }) => {
    const history  = useHistory()
    const socket = useSocket()
    const [username, changeUsername ] = useState('')
    const [password, changePassword ] = useState('')

    const [newUsername, changeNewUsername ] = useState('')
    const [newPassword, changeNewPassword ] = useState('')

    const login = () => {
        socket.emit('login', { username, password }, loggedIn => {
            if(loggedIn){
                history.push('/feed')
            }
        })
    }

    const signUp = () => {
        socket.emit('signUp', { username, password }, user => {
            history.push('/feed')
        })
    }

    return <View {...{ 
        username,
        password,
        changeUsername,
        changePassword,
        newUsername,
        newPassword,
        changeNewUsername,
        changeNewPassword,
        login,
        signUp
    }} />
}

export { SplashController }