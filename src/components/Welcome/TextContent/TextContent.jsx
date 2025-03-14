import PropTypes from "prop-types";
import "./TextContent.css";
import Typewriter from "typewriter-effect";

const TextContent = ({ greet, be, name, description }) => {
  return (
    <>
      <div className="text-content-wrapper">
        <small>{greet}</small>
        <div className="name-wrapper">
          {be && <h3>{be}</h3>}
          {name && <h3 style={{ color: "#7813C5" }}>{name}</h3>}
        </div>
      </div>
      <div>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 50,
            strings: description,
          }}
        />
      </div>
    </>
  );
};

TextContent.propTypes = {
  greet: PropTypes.string,
  be: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};
export default TextContent;
