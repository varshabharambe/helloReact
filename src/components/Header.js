import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from 'react-redux';

const Header = () => {
    const [btn,setBtn] = useState("Login");

    const {loggedInUser} = useContext(UserContext);

    // subscribing to the store using selector
    const cartItems = useSelector((store) => store.cart.items);

    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg m-2 px-2">
            <div>
                <img className="w-48" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex">
                    <li className="px-4">{onlineStatus?"🟢":"🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/cart">Cart-({cartItems.length})</Link></li>
                    <button className="px-4" onClick={() => {
                        btn === "Login" ? setBtn("Logout") : setBtn("Login");;
                        console.log(btn);
                    }}>{btn}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;