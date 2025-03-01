import LayoutRoutes from "./Routes/LayoutRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <LayoutRoutes />
    </div>
  );
};

export default App;
