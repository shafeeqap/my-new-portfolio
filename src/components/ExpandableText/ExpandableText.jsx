import PropTypes from "prop-types";
import { useState } from "react";

const ExpandableText = ({ text, limit = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  if (text.length <= limit) {
    return <p>{text}</p>;
  }

  return (
    <p>
      {isExpanded ? text : `${text.substring(0, limit)}`}
      <span
        onClick={toggleExpand}
        style={{
          color: "#007bff",
          cursor: "pointer",
          marginTop: "5px",
          fontStyle: "italic",
        }}
      >
        {isExpanded ? " less" : " more..."}
      </span>
    </p>
  );
};
ExpandableText.propTypes = {
  text: PropTypes.string,
  limit: PropTypes.number,
};
export default ExpandableText;
