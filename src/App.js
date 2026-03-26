import App from "./App.css";
import React from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import Series from "./pages/Series.jsx";
import AnimePage from "./pages/AnimePage.jsx";



function Home() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Series" element={<Series />} />
          <Route path="/anime/:animeId" element={<AnimePage />} />
        </Routes>        
      </Router>
    </>
  );
}

export default Home;
