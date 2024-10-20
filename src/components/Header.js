import { MAIN_LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginbtn, setLoginbtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="header-logo">
        <img src={MAIN_LOGO_URL} alt="logo" />
      </div>
      <div className="nav-bar">
        <ul>
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>

          <button
            className="login-btn"
            onClick={() => {
              loginbtn === "Login"
                ? setLoginbtn("Logout")
                : setLoginbtn("Login");
            }}
          >
            {loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
