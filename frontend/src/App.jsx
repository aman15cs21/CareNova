import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import LandingPage from "./pages/LandingPage";
import Diagnose from "./pages/Diagnose.jsx";


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/diagnose" element={<Diagnose />} />
      </Routes>
      <Footer />
    </>
  );
}
