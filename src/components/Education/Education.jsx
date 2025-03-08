import "./Education.css";
import bgImage from "../../assets/bgImages/educationBg.png";
import { educationData } from "../../data";
import EducationItems from "./EducationItems/EducationItems";
import { Button, Modal, TitleContent } from "../../components";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";
import { scaleFade, fadeUp } from "../../variants";

const Education = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <div className="container gradient">
        <div className="education-content-wrapper">
          <AnimatedWrapper variant={scaleFade} delay={0.2}>
            <div className="bg-img-wrapper">
              <img src={bgImage} alt="bgImage" />
            </div>
          </AnimatedWrapper>

          <div className="education-text-wrapper">
            <AnimatedWrapper variant={scaleFade} delay={0.2}>
              <TitleContent title={"education"} />
            </AnimatedWrapper>

            {educationData.slice(0, 2).map((edu, index) => (
              <AnimatedWrapper
                variant={fadeUp}
                delay={0.2}
                key={index}
                className="education-display-box"
              >
                <EducationItems
                  icon={edu.icon}
                  institution={edu.institution}
                  course={edu.course}
                  startYear={edu.startYear}
                  endYear={edu.endYear}
                />
              </AnimatedWrapper>
            ))}

            {educationData.length > 2 && (
              <div className="viewAll-btn">
                <Button size="small" onClick={handleModalOpen}>
                  <div className="btn-align-icon">
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
        title="Education Details"
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
              style={'white'}
            />
          </div>
        ))}
      </Modal>
    </>
  );
};

export default Education;
