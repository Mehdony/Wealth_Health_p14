import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routing from "./Routes/Routing";

function App() {
  return (
    <BrowserRouter>
      {/* nav */}
      <Routing />
      {/* footer */}
    </BrowserRouter>
  );
}

export default App;
