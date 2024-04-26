import React from 'react'
import Post from '../Post'
import CreatePost from '../CreatePost'

import './index.css'

const postData = [
    {
        name: 'Abcdef Asdklsdd',
        timestamp: '5 mins ago',
        image: 'https://en.wikipedia.org/wiki/Lion#/media/File:Lion_waiting_in_Namibia.jpg',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        id: 1,
    },
    {
        name: 'Abcdef Asdklsdd',
        timestamp: '5 mins ago',
        image: 'https://en.wikipedia.org/wiki/Lion#/media/File:Lion_waiting_in_Namibia.jpg',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        id: 2,
    },
    {
        name: 'Abcdef Asdklsdd',
        timestamp: '5 mins ago',
        image: 'https://en.wikipedia.org/wiki/Lion#/media/File:Lion_waiting_in_Namibia.jpg',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        id: 3,
    },
    {
        name: 'Abcdef Asdklsdd',
        timestamp: '5 mins ago',
        image: 'https://en.wikipedia.org/wiki/Lion#/media/File:Lion_waiting_in_Namibia.jpg',
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        id: 4,
    },
]
const Dashboard = () => {
    return (
        <div className="dashboard-root">
            <div style={{ width: 700 }}>
                <h1 className="hello-text">Hello Jane</h1>
                <div className="greeting">How are you doing today? Would you like to share something with the community 🤗</div>
                <CreatePost />
                {postData.map((post) => (
                    <Post
                        name={post.name}
                        image={post.image}
                        timestamp={post.timestamp}
                        key={post.id}
                        content={post.content}
                    />
                ))}
            </div>
        </div>
    )
}

export default Dashboard
