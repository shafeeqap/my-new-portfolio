import { home_icons } from "../../data/homeIcons";
import { home_buttonList } from "../../data/homeButtonList";
import Button from "../Button/Button";
import homePageImage from "../../assets/bgImages/homePageImage.png";
import { homeData } from "../../data/homeData";
import TextContent from "./TextContent/TextContent";
import "./Welcome.css";
import ToolTipp from "../ToolTipp/ToolTipp";
import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";
import { bounceIn, scaleFade } from "../../variants";

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.external) {
      window.open(item.path, "_blank", "noopener,noreferrer");
    } else {
      navigate(item.path);
    }
  };
  return (
    <div className="container">
      <div className="content-wrapper">
        <div style={{ marginBottom: "5px" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            {home_icons.map((item, index) => (
              <React.Fragment key={index}>
                <ToolTipp text={item.name}>
                  <a
                    href={item.href ? item.href : item.mailto}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AnimatedWrapper
                      variant={bounceIn}
                      delay={0.2}
                      className="icon-circle"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        style={{ cursor: "pointer" }}
                      />
                    </AnimatedWrapper>
                  </a>
                </ToolTipp>
              </React.Fragment>
            ))}
          </div>

          <AnimatedWrapper
            variant={scaleFade}
            delay={0.2}
            className="text-content"
          >
            <TextContent {...homeData} />
          </AnimatedWrapper>

          <div className="button-container">
            {home_buttonList.map((item) => (
              <Button
                key={item.name}
                variant={item.variant}
                size={item.size}
                onClick={() => handleClick(item)}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </div>

        <AnimatedWrapper
          variant={scaleFade}
          delay={0.2}
          className="image-container"
        >
          <img src={homePageImage} alt="bg-image" />
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default Welcome;
