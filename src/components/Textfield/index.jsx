import React from 'react'
import { Input, Row, Col } from 'antd'
import './index.css'

const Textfield = ({ label, placeholder, type, className }) => {
    if (type === 'password') {
        return (
            <div className={className}>
                <Row justify={'space-between'}>
                    <Col>
                        <label className="input-label">Password</label>
                    </Col>
                    <Col>
                        <label className="forgot-password">Forgot password ?</label>
                    </Col>
                </Row>
            <Input.Password className="input-field" placeholder={placeholder} />
        </div>
        )
    }
    return (
        <div className={className}>
            <Row>
                <Col>
                    <label className="input-label">{label}</label>
                </Col>
            </Row>
            <Input className="input-field" placeholder={placeholder} />
        </div>
    )
}

export default Textfield
