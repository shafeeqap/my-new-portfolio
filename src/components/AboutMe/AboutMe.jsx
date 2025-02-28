import aboutMebgImage from "../../assets/bgImages/aboutMeBgImage.png";
import TitleContent from "../TitleContent/TitleContent";
import "./AboutMe.css";


const AboutMe = () => {
  return (
    <div className="container">
      <div className="img-container">
        <img src={aboutMebgImage} alt="bg-image" />
      </div>
      <div className="about-text-content">
        <TitleContent title={"howIam"} />
      </div>
    </div>
  );
};

export default AboutMe;
