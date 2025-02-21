import "./Home.css";
import HeaderLabel from "../../components/TitleLabel/TitleLabel";
import homePageImage from "../../assets/images/homePageImage.png";
import Button from "../../components/Button/Button";
import { buttonList, imageList } from "../../static/data";
import TextContent from "./TextContent";

const Home = () => {
  return (
    <div className="container">
      <div className="content-wrapper">
        <HeaderLabel>
          {imageList.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              style={{ cursor: "pointer", width: "20px" }}
            />
          ))}
        </HeaderLabel>

        <div className="text-content">
          <TextContent />
        </div>
        <div className="button-container">
          {buttonList.map((btn, index) => (
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
  );
};

export default Home;
