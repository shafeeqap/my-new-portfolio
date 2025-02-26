import "./Education.css";
import bgImage from "../../assets/bgImages/educationBg.png";
import { educationData } from "../../data/educationData";
import EducationItems from "./EducationItems/EducationItems";
import { Button, Modal, TitleContent } from "../../components";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";

const Education = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
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

            {educationData.length > 2 && (
              <div className="viewAll-btn">
                <Button size="small" onClick={handleModalOpen}>
                  <div className="view-align-eye">
                    View All <IoEyeOutline size={18} />
                  </div>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title="Education"
      >
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="education-display-box"
            style={{ marginBottom: `1rem` }}
          >
            <EducationItems
              key={index}
              icon={edu.icon}
              institution={edu.institution}
              course={edu.course}
              startYear={edu.startYear}
              endYear={edu.endYear}
            />
          </div>
        ))}
      </Modal>
    </>
  );
};

export default Education;
