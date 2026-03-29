
import React, { useRef } from "react";
import SignInRegister from "./SignInRegister";
import animeLogo from "../assets/animeLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";



const Header = ({ onSearch }) => {
  


  const debounceRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onSearch(value);
    }, 2000); // 2 sec debounce
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={animeLogo} className="logo-img" alt="" /> Reign Anime Zone
      </div>
      <nav className="nav-tabs">
        <Link to="/Main" className="nav-tab active">
          Main
        </Link>
        <Link to="/Series" className="nav-tab">
          Series
        </Link>
      </nav>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleInputChange}
        />
        <div className="user-actions">
          <FontAwesomeIcon icon="fas fa-cog" style={{ cursor: "pointer" }} />
          <FontAwesomeIcon
            icon="fas fa-user-circle"
            style={{ cursor: "pointer", color: "rgb(198, 2, 159)" }}
          />
          <SignInRegister />
        </div>
      </div>
    </header>
  );
};

export default Header;