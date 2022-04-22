import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        /*problèmes dans les routes */
        <Route path="/" element={<Home />} />
        <Route path="apropos" element={<Apropos />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
