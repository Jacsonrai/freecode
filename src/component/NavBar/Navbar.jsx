import { NavLink } from "react-router-dom";
import "./navbar.scss";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbarMainContainer">
          <div className="logoContainer">
            <NavLink to="/" className="logo">
              LMH
            </NavLink>
          </div>
          <div className="navItemContainer">
            <div className="navItem">
              <NavLink to="/" className="item">
                Home
              </NavLink>
            </div>
            <div className="navItem">
              <NavLink to="/patients" className="item">
                Patient
              </NavLink>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
