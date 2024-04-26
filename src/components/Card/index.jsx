import React from 'react'
import './index.css'

const Card = ({ children, className }) => {
    return <div className={`card-root ${className}`}>
    {children}
    </div>
}

export default Card