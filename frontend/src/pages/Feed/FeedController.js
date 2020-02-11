import React, { useState, useEffect } from 'react'
import { useSocket, useCurrentUser } from '../../socket'
import { Redirect } from 'react-router'

const FeedController = ({ View }) => {
    const socket = useSocket()
    const currentUser = useCurrentUser()
    const [posts, setPosts] = useState([])
    const [newPostContent, changeNewPostContent] = useState('')

    useEffect(() => {
        socket.emit('getPosts', posts => {
            setPosts(posts)
            socket.on('newPostAlert', post => {
                posts = [...posts, post]
                setPosts(posts)
            })
        })
    }, [])

    const createPost = () => {
        changeNewPostContent('')
        socket.emit('createPost', newPostContent)
    }

    return (
        currentUser !== null
            ? <View {...{
                posts,
                createPost,
                newPostContent,
                changeNewPostContent,
                currentUser
            }} />
            : <Redirect to="/" />
    )
}

export { FeedController }