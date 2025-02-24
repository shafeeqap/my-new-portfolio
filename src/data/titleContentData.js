export const titleContentData = (title) => {
  const titleId = title.toLowerCase();

  switch (titleId) {
    case "howiam":
      return {
        title: "How I am",
        description:
          "Greetings, and welcome to my portfolio! I&apos;m Aboobacker Shafeeq.AP, a passionate and innovative developer with a keen eye for creating immersive digital experiences.With a blend of technical prowess and creative vision, bring life to the virtual world through my coding skills and design sensibilities.",
      };
    case "skills":
      return {
        title: "Skills",
        description:
          "Experienced and versatile professional with a strong foundation in both digital designing and computer coding. Proficient in utilizing industry-standard design tools to create visually captivating graphics, user interfaces, and digital content.",
      };
    case "education":
      return {
        title: "Education",
        description:
          "Experienced and versatile professional with a strong foundation in both digital designing and computer coding. Proficient in utilizing industry-standard design tools to create visually captivating graphics, user interfaces, and digital content.",
      };
  }
};
