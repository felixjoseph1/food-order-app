import { MAIN_LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

    const[loginbtn,setLoginbtn] = useState("Login");

    return (
        <div className='header'>
            <div className='header-logo'>
                <img src={MAIN_LOGO_URL}  alt='logo' />
            </div>
            <div className='nav-bar'>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Order</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className='login-btn' onClick={()=>{
                        loginbtn==="Login" ? setLoginbtn("Logout") : setLoginbtn("Login");
                    }} >
                        {loginbtn}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;