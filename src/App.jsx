import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routing from "./Routes/Routing";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import * as userDatas from "../mockedData.json";
import { usersListContext } from "./Context/userContext";



function App() {
  // on stocke la liste des employés dans un state ainsi que la fonction pour la modifier
  const [usersList, setUsersList] = useState(userDatas.default);
  
  return (
    <BrowserRouter>
       {/* on passe le state et la fonction dans le contexte */}
      <usersListContext.Provider value={{usersList, setUsersList}}>
      <Nav />
      <Routing />
      {/* footer */}
      </usersListContext.Provider>
    </BrowserRouter>
  );
}

export default App;
