import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btn,setBtn] = useState("Login");
    console.log("header rendered");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link>Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button onClick={() => {
                        btn === "Login" ? setBtn("Logout") : setBtn("Login");;
                        console.log(btn);
                    }} className="login-btn">{btn}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;