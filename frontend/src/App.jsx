import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import Service from "./pages/Service/Service";
import Appointment from "./pages/Appointment/Appointment";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/appointments" element={<Appointment />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
