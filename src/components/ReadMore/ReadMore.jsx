import PropTypes from "prop-types";
import { useState } from "react";

const ReadMore = ({ text, limit = 100 }) => {
  const [isReadMore , setIsReadMore ] = useState(false);

  const toggleExpand = () => setIsReadMore ((prev) => !prev);

  if (text.length <= limit) {
    return <p>{text}</p>;
  }

  let truncatedText = text.substring(0, limit);
  const lastSpaceIndex = truncatedText.lastIndexOf(" ");
  if (lastSpaceIndex > 0) {
    truncatedText = truncatedText.substring(0, lastSpaceIndex);
  }

  return (
    <p>
      {isReadMore ? text : truncatedText}
      <span
        onClick={toggleExpand}
        style={{
          color: "#007bff",
          cursor: "pointer",
          marginTop: "5px",
          fontStyle: "italic",
        }}
      >
        {isReadMore ? " show less" : " ...read more"}
      </span>
    </p>
  );
};
ReadMore.propTypes = {
  text: PropTypes.string,
  limit: PropTypes.number,
};
export default ReadMore;
