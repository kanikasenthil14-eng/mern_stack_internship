import React from 'react'
import { Link } from 'react-router-dom'
function Navbar(){
    return (
    <nav className="bg-blue-500 text-2xl p-4 text-white">
        <h1 className="text-xl font-bold">Student Management System</h1>
        <Link to="/"className="p-4 mt-3">DashBoard</Link>
        <Link to="/about"className="p-4 mt-3">About</Link>
        <Link to="/students"className="p-4 mt-3">Students</Link>
        <Link to="/settings"className="p-4 mt-3">Settings</Link>
    </nav>
    )
}

export default Navbar