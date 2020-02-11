import React from 'react'

const FeedView = props => (
    <div className="feed-view">
        <h1 className="feed-header">Feed</h1>
        {props.posts.map( post => (
            <div className="post-card">
                <h3>{post.content}</h3>
                <p>-{(
                    post.user_id === props.currentUser.id 
                        ? 'Me'
                        : post.username
                )}</p>
            </div>
        ))}
        <div className="new-post-form">
            <textarea 
                className="new-post-content"
                value={props.newPostContent} 
                onChange={e => props.changeNewPostContent(e.target.value)}
            />
            <button className="create-post-button" onClick={props.createPost}>Post</button>
        </div>
    </div>
)

export { FeedView }