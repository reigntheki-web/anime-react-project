import App from "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import AnimePage from "./pages/AnimePage.jsx";
import Series from "./pages/Series.jsx";







function Home() {
  const [searchQuery, setSearchQuery] = useState("")
 
return(

  
    <>
      <Header onSearch={setSearchQuery}/>
      
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Main" element={<Main searchQuery={searchQuery}/>} />
          <Route path="/Series" element={<Series searchQuery={searchQuery}/>} />
          <Route path="/anime/:animeId" element={<AnimePage />} />
        </Routes>        
      </Router>
    </>
  
)
}

export default Home;