import Main from "./components/Main.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import AnimePage from "./pages/AnimePage.jsx";
import Series from "./pages/Series.jsx";

function Home() {
 
return(

  
    <>
     
      <Router>
              
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Series" element={<Series searchQuery={searchQuery}/>} />
          <Route path="/anime/:animeId" element={<AnimePage />} />
        </Routes>        
      </Router>
    </>
  
)
}

export default Home;