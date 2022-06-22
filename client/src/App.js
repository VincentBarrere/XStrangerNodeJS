import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Trending from "./pages/Trending";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </div>
  );
}

export default App;
