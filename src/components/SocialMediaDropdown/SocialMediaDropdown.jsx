import { useState } from "react";
import { contactSocialMediaImages } from "../../data/contactsData";
import { IoIosLink } from "react-icons/io";
import "./SocialMediaDropdown.css";

const SocialMediaDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="social-media-dropdown">
      <div
        className="icon-circle"
        onClick={toggleDropdown}
        style={{ cursor: "pointer" }}
      >
        <IoIosLink size={20} color="black" />
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            {contactSocialMediaImages.map((item, index) => (
              <li key={index}>
                <a href={item.href}>
                  <img src={item.src} alt={item.alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SocialMediaDropdown;
