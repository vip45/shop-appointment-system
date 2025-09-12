import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import Service from "./pages/Service/Service";
import Appointment from "./pages/Appointment/Appointment";
import SignIn from "./pages/Login/SignIn";
import SignUp from "./pages/Login/SignUp";
import BookNow from "./pages/BookNow/BookNow";
import Shop from "./pages/Shop/Shop";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/:id" element={<Shop />} />
          <Route path="/service/:shop/:shopService" element={<BookNow />} />
          <Route path="/appointments" element={<Appointment />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
