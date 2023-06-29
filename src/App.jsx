import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routing from "./Routes/Routing";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routing />
      {/* footer */}
    </BrowserRouter>
  );
}

export default App;
