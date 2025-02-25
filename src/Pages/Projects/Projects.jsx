import TitleLabel from "../../components/TitleLabel/TitleLabel";
import "./Projects.css";
import { projectData } from "../../data/projectData";
import SingleProject from "./SingleProject/SingleProject";
import ViewAll from "../../components/ViewAll/ViewAll";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-content-wrapper">
        <div>
          <TitleLabel>
            <p>Projects</p>
          </TitleLabel>
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

        {projectData.length > 2 && <ViewAll marginTop={20} />}
      </div>
    </div>
  );
};

export default Projects;
