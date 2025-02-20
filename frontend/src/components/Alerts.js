import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Alerts.css"; 

const Alerts = () => {
    const [alerts, setAlerts] = useState([]);
    const [metric, setMetric] = useState("");
    const [threshold, setThreshold] = useState("");
    const [condition, setCondition] = useState("greater");

    useEffect(() => {
        axios.get("/api/alerts", { headers: { Authorization: localStorage.getItem("token") } })
            .then(res => setAlerts(res.data))
            .catch(err => console.error("Error fetching alerts", err));
    }, []);

    const createAlert = async () => {
        try {
            await axios.post("/api/alerts/create", { metric, threshold, condition }, {
                headers: { Authorization: localStorage.getItem("token") }
            });
            window.location.reload();
        } catch (error) {
            alert("Failed to create alert");
        }
    };

    return (
        <div className="alerts-container">  
            <h1 className="alerts-title">Manage Alerts</h1>
            <div className="alerts-form">
                <input type="text" className="alerts-input" placeholder="Metric" value={metric} onChange={(e) => setMetric(e.target.value)} />
                <input type="number" className="alerts-input" placeholder="Threshold" value={threshold} onChange={(e) => setThreshold(e.target.value)} />
                <select className="alerts-select" value={condition} onChange={(e) => setCondition(e.target.value)}>
                    <option value="greater">Greater than</option>
                    <option value="less">Less than</option>
                </select>
                <button className="alerts-button" onClick={createAlert}>Create Alert</button>
            </div>

            <h2>Existing Alerts</h2>
            <ul className="alerts-list">
                {alerts.map(alert => (
                    <li key={alert._id}>{alert.metric} {alert.condition} {alert.threshold}</li>
                ))}
            </ul>
        </div>
    );
};

export default Alerts;


