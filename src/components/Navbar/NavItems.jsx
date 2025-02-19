import { NavLink } from "react-router-dom";
import "./NavItems.css";
import PropTypes from "prop-types";

const NavItems = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
    >
      <div className="nav-items-container">
        <li>{children}</li>
      </div>
    </NavLink>
  );
};
NavItems.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
};

export default NavItems;
