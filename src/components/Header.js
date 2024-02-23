import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button onClick={() => {
                        setBtn("Logout");
                        console.log(btn);
                    }} className="login-btn">{btn}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;