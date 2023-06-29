import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Employees from "../Pages/Employees/Employees";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employees" element={<Employees/>} />
    </Routes>
  )
}

export default Routing;
