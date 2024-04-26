import React from "react"
import { PropTypes } from 'prop-types'
import './index.css'
const EmojiAvatar = ({ emoji = '👋'}) => {
    return <div className="emoji-avatar">
        {emoji}
    </div>
}

export default EmojiAvatar