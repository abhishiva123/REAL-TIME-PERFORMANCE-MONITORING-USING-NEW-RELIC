import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import Dashboard from "./components/Dashboard";
import Alerts from "./components/Alerts";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./pages/Home";
import Settings from "./pages/Settings";



function App() {
    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/alerts" element={<Alerts />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
