import React from "react";
import { Link } from "react-router-dom";
import Register from "./Register";

function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="">Guest</Link></li>
                    <li><Link to="">Login</Link></li>
                    <li><Link to="/library">Library</Link></li>
                </ul>
            </nav>
            <div>
             <Register/>
            </div>
        </div>
    )
}

export default Header;