import { useState } from "react";
import { AnimatedWrapper, Button, Modal, TitleContent } from "../../components";
import { projectData } from "../../data";
import SingleProject from "./SingleProject/SingleProject";
import { IoEyeOutline } from "react-icons/io5";
import { slideIn } from "../../variants";
import "./Projects.css";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <div className="project-container">
        <div className="project-content-wrapper">
          <AnimatedWrapper variant={slideIn} direction="left" delay={0.2}>
            <TitleContent title={"projects"} />
          </AnimatedWrapper>

          {projectData.slice(0, 2).map((item, index) => (
            <SingleProject
              key={index}
              index={index}
              src={item.src}
              projectImg={item.projectImg}
              title={item.title}
              gitHub={item.gitHub}
              externalLink={item.externalLink}
              techStack={item.techStack}
              description={item.description}
            />
          ))}

          {projectData.length > 2 && (
            <div className="viewAll-btn">
              <Button size="small" onClick={handleModalOpen}>
                <div className="btn-align-icon">
                  View All <IoEyeOutline size={18} />
                </div>
              </Button>
            </div>
          )}
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          title={"Project Details"}
          style={{ color: "white" }}
        >
          {projectData.map((item, index) => (
            <div key={index} style={{ padding: "25px" }}>
              <SingleProject
                key={index}
                index={index}
                src={item.src}
                projectImg={item.projectImg}
                title={item.title}
                gitHub={item.gitHub}
                externalLink={item.externalLink}
                techStack={item.techStack}
                description={item.description}
                style={{ top: "110%", color: "black" }}
              />
            </div>
          ))}
        </Modal>
      </div>
    </>
  );
};

export default Projects;
