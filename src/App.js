import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";


function App() {
  return (
    <Routes>
    <Route path="/" element={<Hero /> } />
    <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
