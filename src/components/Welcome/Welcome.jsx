import { home_icons } from "../../data/homeIcons";
import { home_buttonList } from "../../data/homeButtonList";
import Button from "../Button/Button";
import TitleLabel from "../TitleLabel/TitleLabel";
import homePageImage from "../../assets/bgImages/homePageImage.png";
import "./Welcome.css";
import { homeData } from "../../data/homeData";
import TextContent from "./TextContent/TextContent";

const Welcome = () => {
  return (
    <div className="container">
      <div className="content-wrapper">
        <div style={{ marginBottom: "5px" }}>
          <TitleLabel>
            {home_icons.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                style={{ cursor: "pointer", width: "20px" }}
              />
            ))}
          </TitleLabel>

          <div className="text-content">
            {homeData.map((item, index) => (
              <TextContent
                key={index}
                greet={item.greet}
                be={item.be}
                name={item.name}
                description={item.description}
              />
            ))}
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
