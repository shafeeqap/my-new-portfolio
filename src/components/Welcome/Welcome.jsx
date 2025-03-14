import React from "react";
import { homeIcons, homeButtonList, homeData } from "../../data";
import Button from "../Button/Button";
import homePageImage from "../../assets/bgImages/homePageImage.png";
import TextContent from "./TextContent/TextContent";
import ToolTipp from "../ToolTipp/ToolTipp";
import { useNavigate } from "react-router-dom";
import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";
import { bounceIn, scaleFade } from "../../variants";
import "./Welcome.css";
import ScrollDownButton from "../ScrollDownButton/ScrollDownButton";

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
        <div className="content-box">
          <div className="text-icon-box">
            <div className="conection-icon-box">
              {homeIcons.map((item, index) => (
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
              {homeButtonList.map((item) => (
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

        <div>
          <ScrollDownButton />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
