import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";  

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", {
                username, email, password
            });

            if (response.data) {
                alert("Sign Up Successful!");
                navigate("/login");
            } else {
                alert("Unexpected response format. Please check the backend.");
            }
        } catch (error) {
            console.error("Signup Error:", error);
            alert("Error signing up: " + (error.response?.data?.message || "Server error"));
        }
    };

    return (
        <div className="auth-container">  
            <div className="auth-box">
                <h1>Sign Up</h1>
                <input type="text" className="auth-input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="email" className="auth-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className="auth-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="auth-button" onClick={handleSignup}>Sign Up</button>
            </div>
        </div>
    );
};

export default Signup;
