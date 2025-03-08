import "./ScrollDownButton.css";

const ScrollDownButton = () => {
    
  const handleScroll = () => {
    document.querySelector("#about-me").scrollIntoView({ behavior: "smooth" });
  };

  return <div className="scroll-down-btn" onClick={handleScroll}></div>;
};

export default ScrollDownButton;
