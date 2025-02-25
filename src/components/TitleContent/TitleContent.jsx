import PropTypes from "prop-types";
import { titleContentData } from "../../data/titleContentData";
import TitleLabel from "../TitleLabel/TitleLabel";
import "./TitleContent.css";

const TitleContent = ({ title }) => {
  const data = titleContentData(title);

  return (
    <div className="title-content">
      <>
        <TitleLabel>
          <p>{data.title}</p>
        </TitleLabel>
        <div className="title-description">
          <p>{data.description}</p>
        </div>
      </>
    </div>
  );
};

TitleContent.propTypes = {
  title: PropTypes.string,
};
export default TitleContent;
