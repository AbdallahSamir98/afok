import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBar.css"
const NavBar = () => {
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };



  // Scroll to top when navigating to any link
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm fixed-top">
      <div className="container">
        <div style={{ width: "35%" }}>
          <Link className="navbar-brand" to="/home">
            <img src="images/logo.png" alt="logo"  className="logo" />
          </Link>
        </div>

        <button
          className="navbar-toggler "
          type="button"
          onClick={handleToggleNavbar}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-between ${
            navbarOpen ? "show" : ""
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ">
            {[
              { href: "#home", label: " الرئيسيه" },
              { href: "#whoWeAre", label: "من نحن" },
              { href: "#ourServices", label: "خدماتنا" },
            ].map((link) => (
              <li
                key={link.to}
                className={`nav-item ${
                  location.pathname === link.to ? "active" : ""
                } ps-2`}
                onClick={handleToggleNavbar}
              >
          {link.to ? (
            <Link className="nav-link" to={link.to}>
              <span>{link.label}</span>
            </Link>
          ) : (
            <a className="nav-link" href={link.href}>
              <span>{link.label}</span>
            </a>
          )}
              </li>
            ))}
          </ul>
          <div className=" ">
          <div className=" navButton"> 
          <Link >
          طلب عرض سعر
          </Link>
           </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
