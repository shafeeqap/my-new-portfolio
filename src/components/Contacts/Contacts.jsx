import contactBgImage from "../../assets/bgImages/contactBg.png";
import { contactsImageIcons } from "../../data/contactsData";
import SocialMediaDropdown from "../SocialMediaDropdown/SocialMediaDropdown";
import "./Contacts.css";
import ContactForm from "./ContactsForm/ContactsForm";

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
                {contactsImageIcons.map((item, index) => (
                  <div key={index} className="icon-box">
                    <div className="icon-circle">
                      <img src={item.src} alt={item.alt} />
                    </div>
                    <small>{item.info}</small>
                  </div>
                ))}
              </div>
            </div>

            <div className="contactForm">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
