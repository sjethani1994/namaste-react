import { useState } from "react";
import LOGO_URL from "../utils/constants";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [buttonLabel, setButtonLabel] = useState("Login");
  const isOnline = useOnlineStatus();
  return (
    <header className="header">
      <NavLink to="/" className="logo-link">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </NavLink>

      <nav className="nav-items">
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>

          <li>
            <NavLink to="/grocery">Grocery</NavLink>
          </li>

          <li>
            <div
              className={`connection-status ${isOnline ? "online" : "offline"}`}
              role="status"
              aria-label={isOnline ? "Online" : "Offline"}
              title={
                isOnline ? "Connected to internet" : "No internet connection"
              }
            >
              <span className="status-dot"></span>
              <span>{isOnline ? "Online" : "Offline"}</span>
            </div>
          </li>
          <li>
            <button
              className="common-btn"
              onClick={() =>
                setButtonLabel((prev) =>
                  prev === "Login" ? "Logout" : "Login",
                )
              }
            >
              {buttonLabel}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
