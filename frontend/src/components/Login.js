import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";  

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
            localStorage.setItem("token", response.data.token);
            alert("Login Successful!");
            navigate("/dashboard");
        } catch (error) {
            alert("Login failed. Check credentials.");
        }
    };

    return (
        <div className="auth-container">  
            <div className="auth-box">
                <h1>Login</h1>
                <input type="email" className="auth-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className="auth-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="auth-button" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Login;
