import React from "react";
import reactLogo from "./assets/react.svg"

export default function Navbar() {
    return (
        <nav>
            <img className="logo" src={reactLogo} alt="React Logo" />
            <h3 className="nav-title">ReactFacts</h3>
            <h4 className="nav-text">React Course - Project 1</h4>
        </nav>
    )
}