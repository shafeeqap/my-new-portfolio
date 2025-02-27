import contactBgImage from "../../assets/bgImages/contactBg.png";
import telegram from "../../assets/images/Telegram.png";
import facebook from "../../assets/images/Facebook.png";
import instagram from "../../assets/images/instagram.png";
import linkedIn from "../../assets/images/linkedIn.png";
import Button from "../../components/Button/Button";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contacts-container">
      <div className="contact-body">
        <div className="social-media-icons-vertical">
          <div>
            <img src={linkedIn} alt="linkedIn" />
          </div>
          <div>
            <img src={facebook} alt="facebook" />
          </div>
          <div>
            <img src={instagram} alt="instagram" />
          </div>
          <div>
            <img src={telegram} alt="telegram" />
          </div>
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
                <div className="icon-box">
                  <div className="icon-circle">01</div>
                  <small>+91 95 26 228 414</small>
                </div>
                <div className="icon-box">
                  <div className="icon-circle">02</div>
                  <small>shafeeqap1986@gmail.com</small>
                </div>
                <div className="icon-box">
                  <div className="icon-circle">03</div>
                  <small>+91 95 26 228 414</small>
                </div>
              </div>
            </div>

            <div className="contactForm">
              <div className="form-container">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={""}
                      placeholder="Name"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="text"
                      name="email"
                      value={""}
                      placeholder="Email"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" value={""} placeholder="Message" />
                  </div>
                  <Button size="large">Submit</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
