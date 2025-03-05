import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { navItemsData } from "../../data";
import Drawer from "../Drawer/Drawer";
import NavItems from "../NavItems/NavItems";
import Logo from "../../assets/Logo/Logo";
import "./Header.css";

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
              {navItemsData.map((item, index) => (
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
