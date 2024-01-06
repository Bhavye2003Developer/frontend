import React, { useState } from "react";
import './Signup.css'

function Signup() {
    const [inputStates, setInputStates] = useState(["", "", ""])

    async function sendData(signupDetails) {
        const response = await fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: signupDetails[0],
                email: signupDetails[1],
                password: signupDetails[2]
            })
        })
        const data = await response.json()
        console.log(data)
    }

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2>Sign Up</h2>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" onChange={(e) => {
                        setInputStates([e.target.value, inputStates[1], inputStates[2]])
                    }} />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" onChange={(e) => {
                        setInputStates([inputStates[0], e.target.value, inputStates[2]])
                    }} />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" onChange={(e) => {
                        setInputStates([inputStates[0], inputStates[1], e.target.value])
                    }} />
                </div>
                <button className="signup-btn" onClick={() => {
                    console.log(inputStates)
                    sendData(inputStates)
                }}>Sign Up</button>
            </div>
        </div>
    );
}

export default Signup