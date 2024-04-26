import React from 'react'

import Card from '../Card'
import './index.css'
import { Avatar, Row, Col } from 'antd'
import PostContent from '../PostContent'

const Post = ({ name, timestamp, image, content }) => {
    return (
        <Card className="post-root">
        <Row>
            <Col span={2} className="avatar-container">
                <Avatar size="large" src={image} />
            </Col>
            <Col>
                <div className="name">{name}</div>
                <div className="time">{timestamp}</div>
            </Col>
        </Row>
        <PostContent content={content} />
        </Card>
    )
}

export default Post
