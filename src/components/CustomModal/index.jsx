import React from 'react'
import './index.css'

const CustomModal = ({ open, children }) => {
    if (!open) return null
    return (
        <div>
            <div className="modal">
                {children}
            </div>
            <div className="backdrop"></div>
        </div>
    )
}

export default CustomModal
