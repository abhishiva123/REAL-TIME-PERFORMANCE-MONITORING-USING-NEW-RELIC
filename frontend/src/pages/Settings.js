import React, { useState } from "react";
import axios from "axios";

const Settings = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const updateSettings = async () => {
        try {
            await axios.put("/api/users/update", { email, password }, {
                headers: { Authorization: localStorage.getItem("token") }
            });
            alert("Settings updated successfully");
        } catch (error) {
            alert("Failed to update settings");
        }
    };

    return (
        <div>
            <h1>Settings</h1>
            <input type="email" placeholder="New Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="New Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={updateSettings}>Update</button>
        </div>
    );
};

export default Settings;
