import contactBgImage from "../../assets/bgImages/contactBg.png";
import { contactsIcons } from "../../data/contactsData";
import SocialMediaDropdown from "../SocialMediaDropdown/SocialMediaDropdown";
import ContactForm from "./ContactsForm/ContactsForm";
import "./Contacts.css";
import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";
import { scaleFade } from "../../variants";

const Contacts = () => {
  return (
    <div className="contacts-container">
      <div className="contact-body">
        <div className="social-media-icons-vertical">
          <SocialMediaDropdown />
        </div>

        <div className="contact-inform">
          <div className="contact-image-container">
            <img src={contactBgImage} alt="BgImage" />
          </div>

          <div className="contact-body-content">
            <div className="contact-header-wrapper">
              <div className="contact-title">
                <h1>
                  Let&apos;s <br />
                  Get <br /> In Touch
                </h1>
              </div>

              <div className="contact-icons-box">
                {contactsIcons.map((item, index) => (
                  <div key={index} className="icon-box">
                    <a
                      href={
                        item.tel
                          ? `tel: ${item.tel}`
                          : item.mailto
                          ? `mailto: ${item.mailto}`
                          : item.href
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div
                        className="icon-circle"
                        style={{ cursor: "pointer" }}
                      >
                        <img src={item.src} alt={item.alt} />
                      </div>
                    </a>
                    <small>{item.info}</small>
                  </div>
                ))}
              </div>
            </div>

            <AnimatedWrapper variant={scaleFade} delay={0.2} className="contactForm">
              <ContactForm />
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
