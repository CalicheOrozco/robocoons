import { Routes, Route } from "react-router-dom";
import Documentation from "./components/Documentation";
import Hero from "./components/Hero";
import Investigation from "./components/Investigation";
import Robot from "./components/Robot";
import Team from "./components/Team";


function App() {
  return (
    <Routes>
    <Route path="/" element={<Hero /> } />
    <Route path="/team" element={<Team /> } />
    <Route path="/robot" element={<Robot /> } />
    <Route path="/investigation" element={<Investigation /> } />
    <Route path="/documentation" element={<Documentation /> } />

    
    </Routes>
  );
}

export default App;
