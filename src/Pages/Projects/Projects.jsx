import TitleLabel from "../../components/TitleLabel/TitleLabel";
import "./Projects.css";
import { project_content } from "../../static/data";
import ProjectContent from "./ProjectContent/ProjectContent";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-content-wrapper">
        <div>
          <TitleLabel>
            <p>Projects</p>
          </TitleLabel>
        </div>

        {project_content.map((item, index) => (
          <ProjectContent
            key={index}
            index={index}
            src={item.src}
            title={item.title}
            projectName={item.projectName}
            techStack={item.techStack}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
