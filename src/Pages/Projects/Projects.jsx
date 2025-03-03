import { useState } from "react";
import { Button, Modal, TitleContent } from "../../components";
import { projectData } from "../../data/projectData";
import SingleProject from "./SingleProject/SingleProject";
import { IoEyeOutline } from "react-icons/io5";
import "./Projects.css";


const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <div className="project-container">
        <div className="project-content-wrapper">
          <div>
            <TitleContent title={"projects"} />
          </div>

          {projectData.slice(0, 2).map((item, index) => (
            <SingleProject
              key={index}
              index={index}
              src={item.src}
              title={item.title}
              projectName={item.projectName}
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
        >
          {projectData.map((item, index) => (
            <div key={index} style={{ padding: "25px" }}>
              <SingleProject
                key={index}
                index={index}
                src={item.src}
                title={item.title}
                projectName={item.projectName}
                techStack={item.techStack}
                description={item.description}
                style={"110%"}
              />
            </div>
          ))}
        </Modal>
      </div>
    </>
  );
};

export default Projects;
