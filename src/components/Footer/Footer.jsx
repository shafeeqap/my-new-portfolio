import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <small>
          Copyright© {new Date().getFullYear()} by Shafeeq. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
