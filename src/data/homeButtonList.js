import resumePdf from "../assets/pdf/Resume_full_stack.pdf";

const homeButtonList = [
  { variant: "primary", size: "small", name: "Resume", path: resumePdf, external: true },
  {
    variant: "secondary",
    size: "small",
    name: "Contact me",
    path: "/contacts",
  },
];

export default homeButtonList