import {Routes, Route} from "react-router-dom"
import { ContextProvider } from "./Context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "../src/pages/Home"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Acc from "./pages/Acc";

function App() {
  return (
      <ContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/acc" element= {<Acc/>} />
          </Routes>
      </ContextProvider>
  );
}

export default App;
