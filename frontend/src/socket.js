import React, { useState, useContext, createContext, useEffect } from 'react'
import socketIO from 'socket.io-client'

const SocketContext = createContext(null)

export const SocketProvider = ({ children, socket = null, url = 'http://localhost:3001' }) => {
    if(socket == null) socket = socketIO(url)
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export const useSocket = () => {
    return useContext(SocketContext)
}

export const useCurrentUser = () => {
    let socket = useSocket()
    let [ user, setUser ] = useState()
    useEffect(() => {
        socket.emit('getCurrentUser', setUser)
    }, [])
    return user;
}
