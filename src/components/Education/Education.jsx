import "./Education.css";
import bgImage from "../../assets/bgImages/educationBg.png";
import TitleContent from "../TitleContent/TitleContent";
import { educationData } from "../../data/educationData";
import EducationItems from "./EducationItems/EducationItems";

const Education = () => {
  return (
    <div className="container gradient">
      <div className="education-content-wrapper">
        <div className="bg-img-wrapper">
          <img src={bgImage} alt="" />
        </div>
        <div className="education-text-wrapper">
          <TitleContent title={"education"} />
          {educationData.map((item, index) => (
            <div key={index} className="education-display-box">
              <EducationItems icon={item.icon} education={item.education} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
