import { useState } from "react";
import Logo from "../Logo/Logo";
import "./Header.css";
import { MdMenu } from "react-icons/md";
import Drawer from "../Drawer/Drawer";
import { nav_items } from "../../static/data";
import NavItems from "../NavItems/NavItems";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <header>
        <div className="logo-container">
          <Logo />
        </div>
        <div className="nav-container">
          <div className="nav-items">
            <ul>
              {nav_items.map((item, index) => (
                <NavItems key={index} to={item.path}>
                  {item.display}
                </NavItems>
              ))}
            </ul>
          </div>
          <div className="mob-menu" onClick={toggleDrawer}>
            <MdMenu size={20} aria-label="Toggle menu" />
          </div>
        </div>
      </header>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};

export default Header;
