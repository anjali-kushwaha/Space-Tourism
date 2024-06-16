import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Crew from "./pages/crew/Crew";
import Destination from "./pages/destination/Destination.jsx";
// import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Technology from "./pages/technology/Technology";

function App() {
  return (
    <main className="app-container">
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='destination' element={<Destination />} />
        <Route path='technology' element={<Technology />} />
        <Route path='crew' element={<Crew />} /> 
      </Routes>
    </main>
  );
}

export default App;
