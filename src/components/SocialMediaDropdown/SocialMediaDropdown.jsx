import { useState } from "react";
import { contactSocialMedia } from "../../data/contactsData";
import { IoIosLink } from "react-icons/io";
import "./SocialMediaDropdown.css";
import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";
import { rotateIn, scaleFade } from "../../variants";

const SocialMediaDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="social-media-dropdown"
    >
      <AnimatedWrapper variant={scaleFade} delay={0.2}>
        <div className="icon-circle" style={{ cursor: "pointer" }}>
          <IoIosLink size={20} color="black" />
        </div>

        {isOpen && (
          <div className="dropdown-menu">
            <ul>
              {contactSocialMedia.map((item, index) => (
                <AnimatedWrapper
                  key={index}
                  variant={rotateIn}
                  delay={0.1 * index}
                >
                  <li>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      <img src={item.src} alt={item.alt} />
                    </a>
                  </li>
                </AnimatedWrapper>
              ))}
            </ul>
          </div>
        )}
      </AnimatedWrapper>
    </div>
  );
};

export default SocialMediaDropdown;
