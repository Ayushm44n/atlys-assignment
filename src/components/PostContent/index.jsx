import React from 'react'
import EmojiAvatar from '../EmojiAvatar'
import './index.css'
const PostContent = ({ content }) => {
    return (
        <div className="post-content-wrapper">
            <EmojiAvatar />
            <div className="post-content">
                {content}
            </div>
        </div>
    )
}

export default PostContent
