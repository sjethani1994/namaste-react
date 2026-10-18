import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-brand">
        🍔 <span>Namaste Food</span> · Made with ❤️ by Sumit Jethani
      </p>

      <p className="footer-copy">© {year} Namaste Food. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
