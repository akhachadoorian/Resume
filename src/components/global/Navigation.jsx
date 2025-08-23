import React from "react";
import { NavLink } from "react-router-dom";

function Navigation({}) {

    return (
        <div className="navigation" >
            <div className="left">
                <h6 className="s_header">Alex Khachadoorian</h6>
                <p className="eyebrow">Full Stack Developer</p>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "active" : "")}
                            >
                            Home
                            </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation