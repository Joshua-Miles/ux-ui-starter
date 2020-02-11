import React from 'react'

const FeedView = props => (
    <div>
        <h1>Feed</h1>
        {props.posts.map( post => (
            <div>
                <h3>{post.content}</h3>
                <p>-{(
                    post.user_id === props.currentUser.id 
                        ? 'Me'
                        : post.username
                )}</p>
            </div>
        ))}
        <div>
            <textarea 
                value={props.newPostContent} 
                onChange={e => props.changeNewPostContent(e.target.value)}
            />
            <button onClick={props.createPost}>Post</button>
        </div>
    </div>
)

export { FeedView }