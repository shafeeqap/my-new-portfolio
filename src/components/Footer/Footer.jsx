import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          backgroundColor: "#15104A",
          height: "80px",
          borderTop: "solid 1px #0A2E71",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color:'white'
        }}
      >
        <p>Copyright© {new Date().getFullYear()} by Shafeeq. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
