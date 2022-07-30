import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <ul>
                <li><NavLink to="/" style={({ isActive }) => {
                    return { backgroundColor: isActive ? "yellow" : "" }
                }}>Home</NavLink></li>
                <li><NavLink to="/about" style={({ isActive }) => {
                    return { backgroundColor: isActive ? "yellow" : "" }
                }}>about</NavLink></li>
                <li><NavLink to="/contact" style={({ isActive }) => {
                    return { backgroundColor: isActive ? "yellow" : "" }
                }}>contact</NavLink></li>
                <li><NavLink to="/custom" style={({ isActive }) => {
                    return { backgroundColor: isActive ? "yellow" : "" }
                }}>custom</NavLink></li>
            </ul>
        </>
    )
}

export default NavBar