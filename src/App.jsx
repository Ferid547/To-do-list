import Home from "./Home";
import { FaHeart } from "react-icons/fa6";

function App() {
  return (
    <div className="App">
      <Home />
      <div className=" flex items-center gap-2 text-white absolute bottom-2 left-2">
        Made by Igidov <FaHeart className="text-red-500" />
      </div>
    </div>
  );
}

export default App;
