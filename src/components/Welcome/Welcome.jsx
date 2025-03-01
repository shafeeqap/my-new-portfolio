import { home_icons } from "../../data/homeIcons";
import { home_buttonList } from "../../data/homeButtonList";
import Button from "../Button/Button";
import homePageImage from "../../assets/bgImages/homePageImage.png";
import { homeData } from "../../data/homeData";
import TextContent from "./TextContent/TextContent";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="container">
      <div className="content-wrapper">
        <div style={{ marginBottom: "5px" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            {home_icons.map((img, index) => (
              <div key={index} className="icon-circle">
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ cursor: "pointer" }}
                />
              </div>
            ))}
          </div>

          <div className="text-content">
            <TextContent {...homeData} />
          </div>
          <div className="button-container">
            {home_buttonList.map((btn, index) => (
              <Button key={index} variant={btn.variant} size={btn.size}>
                {btn.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="image-container">
          <img src={homePageImage} alt="bg-image" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
