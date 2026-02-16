import ecart from "../assets/bgImages/Ecart.png";
import ECart from '../assets/bgImages/ECart-02.png'
import quizio from "../assets/bgImages/Quizio.png";
import Quizio from '../assets/bgImages/quizio-02.png'
import pulseTalk from "../assets/bgImages/PulseTalk.png";
import PulseTalk from "../assets/bgImages/PulseTalk-02.png"
import weatherWhiz from "../assets/bgImages/WeatherWhiz.png";
import WeatherWhiz from "../assets/bgImages/WeatherWhiz-02.png"
import blueHarvest from "../assets/bgImages/BlueHarvest.png";
import BlueHarvest from "../assets/bgImages/blueHarvest-02.png"
import letsgo from "../assets/bgImages/letsgo.png";
import Letsgo from "../assets/bgImages/LetsGo1.png";

const projectData = [
  {
    id: 1,
    src: ecart,
    projectImg: ECart,
    title: "E-commerce platform",
    projectName: "Ecart",
    techStack:
      "JavaScript, HTML/CSS, Bootstrap, EJS, Node.js, MongoDB, MVC Architecture, Razorpay",
    description:
      "This e-commerce platform is a robust, full-featured solution designed specifically for electrical items. It offers a seamless user experience through a dynamic and responsive interface built with EJS and Bootstrap, ensuring consistent performance across devices and browsers. On the administrative side, a powerful dashboard has been developed to efficiently manage inventory, orders, customer data, and generate comprehensive sales reports. Secure payment processing is handled via Razorpay, enhancing customer trust with streamlined transactions.  Underpinned by MongoDB for effective data management and built using the MVC architecture, the platform is both scalable and maintainable, providing a solid foundation for future enhancements and growth.",
    gitHub:
      "https://github.com/shafeeqap/power_electrical_ecommerce_public.git",
    externalLink: "#",
  },
  {
    id: 2,
    src: quizio,
    projectImg: Quizio,
    title: "Quiz Application",
    projectName: "Quizio",
    techStack: "JavaScript, React, HTML/CSS, Firebase, jsPDF, React Share",
    description:
      "Developed a full-featured quiz application with both regular and daily quizzes. The app features a dynamic countdown timer for daily quizzes and allows users to generate PDF reports of their results and share them on social media.",
    gitHub: "https://github.com/shafeeqap/QuizApp.git",
    externalLink: "#",
  },
  {
    id: 3,
    src: pulseTalk,
    projectImg: PulseTalk,
    title: "Chat App",
    projectName: "PulseTalk",
    techStack: "JavaScript, React, Chakra UI, Node.js, Socket IO",
    description:
      "This chat application is a real-time messaging platform designed with both performance and user experience in mind. It leverages Socket.IO to enable efficient, bidirectional communication, ensuring that messages are delivered instantly. The front-end is built using Chakra UI, which provides a modern, responsive, and intuitive interface that adapts seamlessly to various devices. On the backend, Node.js powers robust user authentication and secure message handling, ensuring the application remains scalable and reliable.",
    gitHub: "https://github.com/shafeeqap/React/tree/main/Chat_Application",
    externalLink: "https://react-frontend-ko71.onrender.com",
  },
  {
    id: 4,
    src: weatherWhiz,
    projectImg: WeatherWhiz,
    title: "Weather App",
    projectName: "WeatherWhiz",
    techStack: "JavaScript, React, APIs",
    description:
      "This weather application is a modern, responsive tool built with React.js that delivers real-time weather information tailored to the user's location. By integrating data from reliable third-party APIs, the app provides accurate, up-to-date weather updates and forecasts. Its dynamic and user-friendly interface offers intuitive navigation and clear visualizations, making it easy for users to access current conditions and future predictions. The implementation leverages location-based services to automatically display relevant weather details, ensuring a personalized and engaging user experience.",
    gitHub: "https://github.com/shafeeqap/React/tree/main/Weather-app",
    externalLink: "https://weatheapp-nine.vercel.app/",
  },
  {
    id: 5,
    src: blueHarvest,
    projectImg: BlueHarvest,
    title: "Seafood Restaurant",
    projectName: "BlueHarvest",
    techStack: "JavaScript, React, MUI",
    description:
      "This seafood restaurant landing page is a sleek, modern design built with React.js and inspired by Material UI. It highlights mouth-watering seafood dishes and elegant visuals, providing an enticing preview of a fully functional website soon to be updated with interactive features.",
    gitHub: "https://github.com/shafeeqap/React/tree/main/Restaurant_app_MUI",
    externalLink: "https://react-88oa.vercel.app/",
  },
  {
    id: 6,
    src: letsgo,
    projectImg: Letsgo,
    title: "Travel App",
    projectName: "Let'sGo",
    techStack: "JavaScript, Next.js, Tailwind CSS, APIs",
    description:
      "This travel application is a visually stunning and user-friendly platform built with Next.js and styled with Tailwind CSS. It offers users an immersive experience to explore travel destinations, access real-time information, and plan their trips effectively. By integrating various APIs, the app provides comprehensive details about locations, including weather updates, local attractions, and travel tips. The intuitive design ensures seamless navigation, making it easy for users to discover new places and create personalized travel itineraries.",
    gitHub: "https://github.com/shafeeqap/Next.js/tree/main/travel-app",
    externalLink: "https://travel-app-blush-zeta.vercel.app/",
  },
];


export default projectData