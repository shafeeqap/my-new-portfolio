import "./Education.css";
import bgImage from "../../assets/bgImages/educationBg.png";
import TitleContent from "../TitleContent/TitleContent";
import { educationData } from "../../data/educationData";
import EducationItems from "./EducationItems/EducationItems";
import ViewAll from "../ViewAll/ViewAll";


const Education = () => {
  return (
    <div className="container gradient">
      <div className="education-content-wrapper">
        <div className="bg-img-wrapper">
          <img src={bgImage} alt="bgImage" />
        </div>
        <div className="education-text-wrapper">
          <TitleContent title={"education"} />
          {educationData.slice(0, 2).map((edu, index) => (
            <div key={index} className="education-display-box">
              <EducationItems
                icon={edu.icon}
                institution={edu.institution}
                course={edu.course}
                startYear={edu.startYear}
                endYear={edu.endYear}
              />
            </div>
          ))}

          {educationData.length > 2 && <ViewAll marginTop={5} />}
        </div>
      </div>
    </div>
  );
};

export default Education;
