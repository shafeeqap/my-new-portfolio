import "./AboutMe.css";
import bgImage from "../../assets/images/creative.png";
import TitleContent from "../TitleContent/TitleContent";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="img-container">
        <img src={bgImage} alt="bg-image" />
      </div>
      <div className="about-text-content">
        <TitleContent title={'howIam'}/>
      </div>
    </div>
  );
};

export default AboutMe;
