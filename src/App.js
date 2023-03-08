import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Team from "./components/Team";


function App() {
  return (
    <Routes>
    <Route path="/" element={<Hero /> } />
    <Route path="/team" element={<Team /> } />
    </Routes>
  );
}

export default App;
