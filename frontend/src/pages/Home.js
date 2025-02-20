import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; 

const Home = () => {
    return (
        <div className="home-container">  
            <h1 className="home-title">Welcome to Real-Time Performance Monitoring</h1>
            <p className="home-description">
                Track and optimize your application's performance efficiently.
            </p>
            <div className="home-buttons">
                <Link to="/dashboard">
                    <button className="home-button primary">Go to Dashboard</button>
                </Link>
                <Link to="/alerts">
                    <button className="home-button secondary">Manage Alerts</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
