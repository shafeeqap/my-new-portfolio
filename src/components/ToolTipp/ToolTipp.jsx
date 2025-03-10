import PropTypes from "prop-types";
import { useState } from "react";
import "./ToolTipp.css";

const ToolTipp = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => {
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="tooltip-container"
      onMouseOver={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      <div className={`tooltipp-text ${isVisible ? "show" : ""}`}>{text}</div>
    </div>
  );
};

ToolTipp.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
};
export default ToolTipp;
