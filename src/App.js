import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Robot from "./components/Robot";
import Team from "./components/Team";


function App() {
  return (
    <Routes>
    <Route path="/" element={<Hero /> } />
    <Route path="/team" element={<Team /> } />
    <Route path="/robot" element={<Robot /> } />
    
    </Routes>
  );
}

export default App;
