import PropTypes from "prop-types";
import { titleContentData } from "../../data/titleContentData";
import TitleLabel from "./TitleLabel/TitleLabel";
import "./TitleContent.css";
import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";
import { scaleFade } from "../../variants";

const TitleContent = ({ title }) => {
  const data = titleContentData(title);

  return (
    <div className="title-content">
      <>
        <AnimatedWrapper variant={scaleFade} delay={0.2}>
          <TitleLabel text={data?.title} />
        </AnimatedWrapper>

        <AnimatedWrapper
          variant={scaleFade}
          delay={0.2}
          className="title-description"
        >
          <p>{data?.description}</p>
        </AnimatedWrapper>
      </>
    </div>
  );
};

TitleContent.propTypes = {
  title: PropTypes.string,
};
export default TitleContent;
