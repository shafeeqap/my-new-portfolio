import "./Drawer.css";
import PropTypes from "prop-types";
import NavItems from "../NavItems/NavItems";
import { nav_items } from "../../static/data";

const Drawer = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop to detect clicks outside the drawer */}
      {isOpen && <div className="backdrop" onClick={onClose}></div>}

      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <div onClick={onClose} className="close-btn">
          &times;
        </div>

        <div className="drawer-content">
          {nav_items.map((item, index) => (
            <>
              <div className="drawer-items" onClick={onClose}>
                <NavItems key={index} to={item.path} >
                  {item.display}
                </NavItems>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
export default Drawer;
