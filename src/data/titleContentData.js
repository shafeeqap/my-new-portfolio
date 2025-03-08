const titleContentData = (title) => {
  const titleId = title.toLowerCase();

  switch (titleId) {
    case "howiam":
      return {
        title: "How I am",
        description:
          "Hello and welcome to my portfolio! I'm Aboobacker Shafeeq.AP, a dedicated MERN stack developer who turns innovative ideas into engaging digital experiences. I blend technical expertise with a creative vision to build responsive, intuitive web applications that truly resonate with users. My journey is driven by continuous learning and a passion for crafting solutions that are as functional as they are visually compelling. Explore my work and see how I bring the virtual world to life through thoughtful code and design.",
      };
    case "skills":
      return {
        title: "Skills",
        description:
          "I'm a skilled MERN stack developer passionate about creating end-to-end web solutions. I build scalable and responsive applications by leveraging MongoDB, Express, React, and Node.js, ensuring robust backends and intuitive frontends that deliver exceptional user experiences.",
      };
    case "education":
      return {
        title: "Education",
        description:
          "My education has been a cornerstone of my personal and professional growth. It has provided me with a strong foundation in critical thinking and problem solving, while my self-driven learning and hands-on experiences have enriched my practical skills.",
      };
    case "projects":
      return {
        title: "Projects",
        description:
          "Explore my portfolio to see a curated collection of projects where creativity meets technical precision. Each project reflects my passion for solving challenges with innovative design and a user-centered approach.",
      };
  }
};

export default titleContentData;
