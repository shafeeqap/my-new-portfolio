import PropTypes from "prop-types";
import './TitleLabel.css'

const TitleLabel = ({ text, style }) => {
  return (
    <div className="title-label" style={style}>
      <p>{text}</p>
    </div>
  );
};
TitleLabel.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
};
export default TitleLabel;
