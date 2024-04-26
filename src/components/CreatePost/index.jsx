import React, { useState } from 'react'
import Card from '../Card'
import PostContent from '../PostContent'
import { Button } from 'antd'
import './index.css'
import Login from '../Login'
import CustomModal from '../CustomModal'

const CreatePost = () => {
    const [showModal, setShowModal] = useState(false)

    const handlePost = () => {
        setShowModal(true)
    }
    return (
        <>
        <Card className="create-post-root">
            <div className="header">Create Post</div>
            <PostContent />
            <div className="button-container">
                <Button type="primary" onClick={handlePost}>Post</Button>
            </div>
        </Card>
        <CustomModal open={showModal}>
            <Login showCloseButton onClose={() => setShowModal(false)} />
        </CustomModal>
        </>
    )
}

export default CreatePost
