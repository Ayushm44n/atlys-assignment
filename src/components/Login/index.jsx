import React, { useState } from 'react'
import { Row, Col, Input, Button } from 'antd'
import Card from '../Card'
import Textfield from '../Textfield'
import './index.css'

const Login = ({ isLogin, showCloseButton, onClose }) => {
    const [showLoginFlow, setShowLoginFlow] = useState(isLogin)
    if (showLoginFlow) {
        return (
            <Card className={"login-root"}>
                {showCloseButton && (
                    <div className="close-button-container">
                        <button className="close-button" onClick={onClose}>X</button>
                    </div>
                )}
                <div className="welcome-text">
                WELCOME BACK
                </div>
                <div className="login-text">Log in to your account</div>
                <Textfield label="Email or username" placeholder="Enter your email or username" className='input-wrapper' />
                <Textfield label="Password" placeholder="Enter your password" type="password" className='input-wrapper' />
                <div className='input-wrapper'>
                    <Button className="login-button" type="primary">Login</Button>
                    <div className="not-registered">Not registered yet ? <span onClick={() => setShowLoginFlow(false)}>{`Register ->`}</span></div>
                </div>
            </Card>
        )
    }
    return (
        <Card className={"login-root"}>
            {showCloseButton && (
                <div className="close-button-container">
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
            )}
            <div className="welcome-text">
            SIGN UP
            </div>
            <div className="login-text">Create an account to continue</div>
            <Textfield label="Email" placeholder="Enter an email" className='input-wrapper' />
            <Textfield label="Username" placeholder="Choose your preferred username" className='input-wrapper' />
            <Textfield label="Password" placeholder="Choose a strong password" type="password" className='input-wrapper' />
            <div className='input-wrapper'>
                <Button className="login-button" type="primary">Continue</Button>
                <div className="not-registered">Already have an account ? <span onClick={() => setShowLoginFlow(true)}>{`Login ->`}</span></div>
            </div>
        </Card>
    )
}

export default Login
