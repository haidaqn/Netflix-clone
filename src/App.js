import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "../src/pages/Home"
import { ContextProvider } from "./Context/AuthContext";

function App() {
  return (
      <ContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={ <Home/> } />
          </Routes>
      </ContextProvider>
  );
}

export default App;
