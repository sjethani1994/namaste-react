import { useState } from "react";
import LOGO_URL from "../utils/constants";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// NavLink passes { isActive } so the current page gets highlighted
const navLinkClass = ({ isActive }) =>
  `inline-flex items-center justify-center whitespace-nowrap rounded-[10px] p-2 text-xs font-semibold transition-colors hover:bg-[#fff4ed] hover:text-brand xs:px-2.5 xs:py-[9px] xs:text-sm md:px-4 md:py-[11px] md:text-[15px] ${
    isActive ? "bg-peach text-brand" : "text-[#3d3d3d]"
  }`;

const Header = () => {
  const [buttonLabel, setButtonLabel] = useState("Login");
  const isOnline = useOnlineStatus();
  return (
    <header className="z-10 flex shrink-0 flex-col items-center gap-2.5 border-b border-[#f1f1f1] bg-cream px-3 py-2.5 shadow-[0_3px_15px_rgba(0,0,0,0.05)] xs:flex-row xs:justify-between xs:gap-[15px] xs:px-5 md:gap-[30px] md:px-[50px]">
      <NavLink to="/" className="group flex shrink-0 items-center">
        <img
          className="h-[45px] w-20 object-contain transition-transform duration-250 group-hover:scale-104 xs:h-[55px] md:h-[65px] md:w-[100px]"
          src={LOGO_URL}
          alt="Logo"
        />
      </NavLink>

      <nav className="flex w-full items-center justify-center xs:w-auto">
        <ul className="flex flex-wrap items-center justify-center gap-[3px] xs:justify-end xs:gap-1 md:gap-2">
          <li>
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact Us
            </NavLink>
          </li>

          <li>
            <NavLink to="/grocery" className={navLinkClass}>
              Grocery
            </NavLink>
          </li>

          <li>
            <div
              className={`inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-[9px] py-[7px] text-xs font-semibold xs:gap-2 xs:px-[13px] xs:py-[9px] xs:text-[13px] ${
                isOnline
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
              role="status"
              aria-label={isOnline ? "Online" : "Offline"}
              title={
                isOnline ? "Connected to internet" : "No internet connection"
              }
            >
              <span
                className={`size-2 shrink-0 rounded-full xs:size-[9px] ${
                  isOnline
                    ? "bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.15)]"
                    : "bg-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.15)]"
                }`}
              ></span>
              <span>{isOnline ? "Online" : "Offline"}</span>
            </div>
          </li>
          <li>
            <button
              className="cursor-pointer whitespace-nowrap rounded-[10px] border border-brand bg-brand px-3 py-[9px] text-xs font-bold text-white shadow-[0_3px_8px_rgba(255,82,0,0.15)] transition hover:-translate-y-px hover:border-brand-dark hover:bg-brand-dark hover:shadow-[0_5px_12px_rgba(255,82,0,0.22)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand/30 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 xs:px-[15px] xs:text-sm md:px-[23px] md:py-[11px]"
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
