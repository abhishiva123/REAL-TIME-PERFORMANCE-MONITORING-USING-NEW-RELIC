import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Dashboard.css";  

const Dashboard = () => {
    const [metrics, setMetrics] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/metrics/newrelic", {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
        .then(response => setMetrics(response.data))
        .catch(error => console.error("Error fetching metrics:", error));
    }, []);

    return (
        <div className="dashboard-container">  
            <h1>Performance Dashboard</h1>
            {metrics ? <pre>{JSON.stringify(metrics, null, 2)}</pre> : <p>Loading...</p>}
        </div>
    );
};

export default Dashboard;
